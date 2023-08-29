function CustomActivityData() {
    //jQuery extension to get query string parameters as objects
    //Source: https://css-tricks.com/snippets/jquery/get-query-params-object/
    jQuery.extend({
      getQueryParameters : function(str) {
          return (str || document.location.search).replace(/(^\?)/,'').split("&").map(function(n){return n = n.split("="),this[n[0]] = n[1],this}.bind({}))[0];
      }
    });

    // class member variables
    this.queryParams = $.getQueryParameters();
    this.assessmentId = this.queryParams.id;
    this.isPreview = this.queryParams.preview ? this.queryParams.preview : false;
    this.attemptId = this.queryParams.attemptId;
    this.nonce = this.queryParams.nonce;
    this.APIBaseUrl = '/index.php/api/';
    this.initAttemptEndpoint = this.APIBaseUrl + "attempt/" + this.assessmentId;
    this.gradePassbackEndpoint = this.APIBaseUrl + "grade/passback";
    // the next two endpoints need attempt ID, not fetched until later, so appended when making the call
    this.updateAttemptEndpoint = this.APIBaseUrl + "attempt/update/";
    this.insertResponseEndpoint = this.APIBaseUrl + "response/";
    this.attemptStarted = false; //used to prevent errors if an activity mistakenly initializes a second attempt

    // the above API Base url should work fine in any webserve environment, but not locally;
    // rather than a whole bunch of environment hassle, just going to check for localhost and adjust accordingly
    if (window.location.href.indexOf('localhost') !== -1) {
        this.APIBaseUrl = '/api/';
    }

    // class functions
    this.apiInitAttempt = apiInitAttempt;
    this.apiUpdateAttempt = apiUpdateAttempt;
    this.apiInsertResponse = apiInsertResponse;
    this.apiGradePassback = apiGradePassback;
    this.appendErrorModals = appendErrorModals;
    this.appendErrorModal = appendErrorModal;
    this.getServerError = getServerError;
    this.showAttemptErrorModal = showAttemptErrorModal;
    this.showResponseErrorModal = showResponseErrorModal;
    this.showInitErrorModal = showInitErrorModal;
    this.showGradeErrorModal = showGradeErrorModal;

    // init
    this.appendErrorModals();

    // initialize an attempt for a custom activity, obtaining an attempt ID from server
    // parameters:
    //  - params, a JSON object or JSON string (not needed in most cases, but
    //    was used previously for edge cases like P101 mouseover activities)
    //  - callback, a function to be called after attempt init success
    // returns:
    //  - false on error, otherwise, void
    function apiInitAttempt(params, callback) {
        var initData = { 'preview': this.isPreview, 'attemptId': this.attemptId, 'nonce': this.nonce },
            that = this;

        //if no assessment id for query parameter, then no data tracking possible, return false
        if (!this.assessmentId) {
            var errorMessage = 'An assessment ID was not included in the URL on launch.';
            that.showInitErrorModal(errorMessage);
            return false;
        }

        //MGM, 8/29/23:
        //Some A111 construct 2 activities were mistakenly re-initializing the attempt in phase 2,
        //causing an error from the API. The goal here is to prevent those errors from happening if
        //there are unintended bugs in any of the activities with re-initializing attempts. No activities
        //currently are using any form of programmatic restart where re-initializing is necessary. 
        if (this.attemptStarted) {
            return false;
        }

        $.ajax({
            type: 'POST',
            url: that.initAttemptEndpoint,
            data: initData,
            dataType: "json",
            success: function(data) {
                //not sure why, but dot notation worked fine in plain JS, but in C2, it showed up
                //as undefined unless I used string notation instead for the nested object key.
                //maybe a quirk of the minifying compiler that C2 uses?
                that.attemptId = data.data['attemptId'];
                that.attemptStarted = true;

                if (callback) {
                    callback();
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                var serverError = that.getServerError(jqXHR),
                    errorMessage = serverError ? serverError : 'There was an error initializing your attempt.';
                that.showInitErrorModal(errorMessage);
                return false;
            }
        });
    };

    // update a student's attempt (such as incrementing count correct, new milestone, etc.)
    // parameters:
    //  - params, a JSON object or JSON string (includes countCorrect, etc.).
    //  - callback, a function to be called after update attempt success
    // returns:
    //  - boolean, false on error, true on success
    function apiUpdateAttempt(params, callback) {
        var that = this;

        //hoping this could bridge the gap between C2 and normal js activities;
        //C2 requires the string in the params box be wrapped in double quotes, which
        //means JSON.parse throws an error; need to replace single quotes with double
        //here, because C2 won't allow it when entering as param. sigh...
        if (typeof params === "string") {
            params = params.replace(/'/g, '"');
            params = JSON.parse(params);
        }

        $.ajax({
            type: 'POST',
            url: that.updateAttemptEndpoint + that.attemptId,
            data: params,
            dataType: "json",
            success: function(result){
                //if completed, run grade passback, pass the callback if defined
                if (params.complete == 1) {
                    that.apiGradePassback(callback);
                }
                else if (callback) { //if a callback after success
                    callback();
                }

                return true;
            },
            error: function(jqXHR, textStatus, errorThrown) {
                var serverError = that.getServerError(jqXHR),
                    errorMessage = serverError ? serverError : 'There was an error updating your attempt.';
                that.showAttemptErrorModal(errorMessage);
                return false;
            }
        });
    }

    // pass a grade back after activity completion
    // parameters:
    //  - callback, a function to be called after grade passback success
    // returns:
    //  - false on error, void on success
    function apiGradePassback(callback) {
        var that = this,
            params = { 'attemptId': that.attemptId };

        $.ajax({
            type: 'POST',
            url: that.gradePassbackEndpoint,
            data: params,
            dataType: "json",
            success: function(data) {
                //hide if previously an error and the student tried again
                $('#apiGradeErrorModal').modal('hide');

                if (callback) {
                    callback();
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                var serverError = that.getServerError(jqXHR),
                    errorMessage = serverError ? serverError : 'There was an error passing back a grade.';
                that.showGradeErrorModal(errorMessage, callback);
                return false;
            }
        });
    }

    // record a student response to a question
    // parameters:
    //  - params, a JSON object or JSON string (includes answerKey, etc.).
    //  - callback, a function to be called after insert response success
    // returns:
    //  - boolean, false on error, true on success
    function apiInsertResponse(params, callback) {
        var that = this;

        //same here as in updating attempt, C2 requires string for params, can't do plain object
        if (typeof params === "string") {
            params = params.replace(/'/g, '"');
            params = JSON.parse(params);
        }

        $.ajax({
            type: 'POST',
            url: that.insertResponseEndpoint + that.attemptId,
            data: params,
            dataType: "json",
            success: function(result) {
                return true;
            },
            error: function(jqXHR, textStatus, errorThrown) {
                var serverError = that.getServerError(jqXHR),
                    errorMessage = serverError ? serverError : 'There was an error recording your response.';
                that.showResponseErrorModal(errorMessage);
                return false;
            }
        });
    };

    //append modals to the html page that will be activated for grade passback errors
    function appendErrorModals() {
        appendErrorModal('apiInitErrorModal', 'Error initializing your session.');
        appendErrorModal('apiAttemptErrorModal', 'Error updating your attempt.');
        appendErrorModal('apiResponseErrorModal', 'Error recording your response.');
        appendErrorModal('apiGradeErrorModal', 'Error updating grade.');
    }

    //append an error modal type
    function appendErrorModal(id, message) {
        $('body').append('<div class="modal fade" id="' + id + '" tabindex="-1" role="alertdialog" aria-labelledby="' + id + 'Label">' +
              '<div class="modal-dialog" role="document">' +
                '<div class="modal-content">' +
                  '<div class="modal-header">' +
                    '<h2 class="modal-title" id="' + id + 'Label">Error</h2>' +
                  '</div>' +
                  '<div class="modal-body">' +
                        '<h3>' + message + '</h3>' +
                        '<h4 class="error-details"></h4>' +
                  '</div>' +
                '</div>' +
              '</div>' +
            '</div>');
    }

    //convert server response to a readable error message, if available
    function getServerError(jqXHR) {
        var errorString = jqXHR.responseText,
            errorJson = JSON.parse(errorString);

        if (!errorJson) {
            return false;
        }

        if (!errorJson.errorList) {
            return false;
        }

        return errorJson.errorList[0]; //should be pretty cut and dry here, a single error
    }

    function showAttemptErrorModal(errorDetails) {
        $('#apiAttemptErrorModal .error-details').html(errorDetails);
        $('#apiAttemptErrorModal').modal({backdrop: 'static', keyboard: false});
    }

    function showGradeErrorModal(errorDetails, callback) {
        $('#apiGradeErrorModal .error-details').html(errorDetails);
        $('#apiGradeErrorModal').modal({backdrop: 'static', keyboard: false});
        if (!$('#apiGradeRetryBtn').length) {
            var that = this;
            $('#apiGradeErrorModal .modal-body').append('<button class="btn btn-default btn-lg" id="apiGradeRetryBtn">Try again</button>');
            $('#apiGradeErrorModal .modal-body').append('<p id="apiGradeRetryMsg" class="hidden">Grade passback in progress...</p>');
            $('#apiGradeRetryBtn').click(function() {
                $('#apiGradeRetryMsg').removeClass('hidden');
                that.apiGradePassback(callback);
            });
        }
        else { //if previous retry attempt failed, make sure the loading message is hidden again
            $('#apiGradeRetryMsg').addClass('hidden');
        }
    }

    function showResponseErrorModal(errorDetails) {
        $('#apiResponseErrorModal .error-details').html(errorDetails);
        $('#apiResponseErrorModal').modal({backdrop: 'static', keyboard: false});
    }

    function showInitErrorModal(errorDetails) {
        $('#apiInitErrorModal .error-details').html(errorDetails);
        $('#apiInitErrorModal').modal({backdrop: 'static', keyboard: false});
    }
}