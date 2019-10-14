// var group = queryParams.group ? queryParams.group : "C1";
// group = group.toLowerCase().replace('%20', ' ').replace('+', ' ');
// if (group === "team estes" || group === "team thelen") {
//     group = "C1";
// }
// else if (group === "team shiffrin" || group === "team bryan") {
//     group = "C2";
// }
// else if (group === "team peterson" || group === "team skinner") {
//     group = "C3";
// }
// else if (group === "team mcfall" || group === "team kantor") {
//     group = "C4";
// }
// else {
//     group = "C1"; //C1 by default
// }

//NOTE:
//This activity is not being used in production. However, we are keeping it updated
//since it is used in the acceptance tests for Quick Check and custom activity data tracking.

var customActivityData = new CustomActivityData(),
    group = "C1"; //C1 by default now that the study is over

// Global div names that are reused and can be changed in this one spot
var instructionsDiv = 'instructions',
    questionAreaDiv = 'question_area',
    buttonAreaDiv = 'button_area',
    answerAreaDiv = 'answer_area',
    answerableAreaDiv = 'answerable_area',
    textAnswerDiv = 'text_answer',
    resetResponseDiv = 'reset_response',
    currentScoreDiv = 'current_score',
    submitResponseDiv = 'submit_response',
    feedbackAreaDiv = 'feedback',
    feedbackTextDiv = 'feedback_text',
    feedbackModalDiv = 'feedbackModal',
    restartDiv = 'restart',
    nextDiv = 'next',
    wrapperDiv = 'wrapper',
    staticImageDiv = 'static-image',
    interactiveImageDiv = 'interactive-image',
    answerableSVG = 'answerable_SVG',
    SVGhover = 'SVG_hover',
    SVGanswer = 'SVG_answer',
    $wrapper = $('.' + wrapperDiv),
    $draggable = null; //variable to cache the draggable element

//jquery handlers -- empty for now, initialized after elements added
var $instructions,
    $questionArea,
    $next,
    $answerArea,
    $answerable,
    $reset,
    $scoreArea,
    $submit,
    $feedback,
    $feedbackText,
    $feedbackModal,
    $restart,
    $answerableSVG,
    $buttonArea;

function createHtmlScaffolding(activity) {
    $wrapper.append('<div class="' + staticImageDiv + '"></div>');
    $wrapper.append('<div class="' + instructionsDiv + '"></div>');
    if (activity.questionType === "c2" || activity.questionType === "c4") { //question goes on top in C2 and C4
        $wrapper.append('<div class="' + questionAreaDiv + '" data-trackable="1" data-contentCode="question" data-eventLabel="questionArea" tabindex="-1"></div>');
    }
    $wrapper.append('<div class="' + answerAreaDiv + '"></div>');
    $('.' + answerAreaDiv).append('<div class="' + interactiveImageDiv + '"></div>');
    $('.' + answerAreaDiv).append('<div class="' + feedbackAreaDiv + '"></div>');
    appendFeedbackModal(activity);
    if (activity.questionType === "c1" || activity.questionType === "c3" ) { //question goes on bottom in C1 and C3
        $wrapper.append('<div class="' + questionAreaDiv + '" data-trackable="1" data-contentCode="question" data-eventLabel="questionArea" tabindex="-1"></div>');
    }
    $wrapper.append('<div class="' + buttonAreaDiv + ' clearfix"></div>');
    $('.' + buttonAreaDiv).append('<button class="' + resetResponseDiv + '" tabindex="0">Reset Response</button>');
    $('.' + buttonAreaDiv).append('<button class="' + submitResponseDiv + '" tabindex="0">Submit Response</button>');
    $('.' + buttonAreaDiv).append('<div class="' + currentScoreDiv + '" tabindex="0"></div>');
    $('.' + buttonAreaDiv).append('<button class="' + restartDiv + '" tabindex="0">Start Over' + '</button>');
}

function initHandlers() {
    $instructions = $('.' + instructionsDiv);
    $questionArea = $('.' + questionAreaDiv);
    $next = $('.' + nextDiv);
    $answerArea = $('.' + answerAreaDiv);
    $reset = $('.' + resetResponseDiv);
    $scoreArea = $('.' + currentScoreDiv);
    $submit = $('.' + submitResponseDiv);
    $feedback = $('.' + feedbackAreaDiv);
    $feedbackText = $('.' + feedbackTextDiv);
    $feedbackModal = $('#' + feedbackModalDiv);
    $restart = $('.' + restartDiv);
    $staticImage = $('.' + staticImageDiv);
    $interactiveImage = $('.' + interactiveImageDiv);
    $answerableSVG = $('.' + answerableSVG);
    $buttonArea = $('.' + buttonAreaDiv);
}

//append a modal that will be activated for feedback and score
function appendFeedbackModal(activity) {
    $('.' + feedbackAreaDiv).append('<div class="modal fade" id="' + feedbackModalDiv + '" tabindex="-1" role="dialog" aria-labelledby="feedbackLabel">' +
          '<div class="modal-dialog" role="document">' +
            '<div class="modal-content">' +
              '<div class="modal-header sr-only">' + //modal title only visible to screenreaders for accessibility
                '<h2 class="modal-title" id="feedbackLabel">Feedback</h2>' +
              '</div>' +
              '<div class="modal-body">' +
                '<h2 class="' + feedbackTextDiv + ' clearfix"></h2>' +
                '<br> <br>' +
                '<button type="button" class="btn ' + nextDiv + '">Click to continue</button>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>');
    //because the combined static image and text answers takes up lots more space in these activities, drop the feedback modals lower
    if (activity.questionType === "c2" || activity.questionType === "c4") {
        //this has to be appended to the head of the document as a rule
        //instead of using the .css() function, because the classes are dynamic
        $("<style type='text/css'> .modal.in .modal-dialog{ transform: translate(0px, 500px); } </style>").appendTo("head");
    }
}

function appendCheckmark() {
    var checkMark = '<div class="checkmark_wrapper">' +
                        '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg "' +
                        'xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" ' +
	                    'viewBox="0 0 98.5 98.5" enable-background="new 0 0 98.5 98.5" xml:space="preserve"> ' +
                        '<path class="checkmark" fill="none" stroke-width="8" stroke-miterlimit="10" ' +
                        'd="M81.7,17.8C73.5,9.3,62,4,49.2,4 C24.3,4,4,24.3,4,49.2s20.3,45.2,45.2,45.2s45.2-20.3,45.2-45.2c0-8.6-2.4-16.6-6.5-23.4l0,0L45.6,68.2L24.7,47.3"/> ' +
                        '</svg> ' +
                     '</div>';
    $feedbackText.append(checkMark);
}

function displayInstructions(instructionText) {
    $instructions.html(instructionText);
}

function displaySVG(activity) {
    if (activity.questionType === "c1" || activity.questionType === "c3") {
		$interactiveImage.load(activity.svg, function() {
			setLtiHeight();
            if (activity.questionType === "c1") {
                resetDragDrop(activity); //both c1 and c3 need an interactive image; only c1 uses drag and drop
            }
		});
    }
    else if (activity.questionType === "c2" || activity.questionType === "c4") {
		$staticImage.load(activity.svg, function() {
			setLtiHeight();
		});
    }
}

function setLtiHeight() {
	   var height = $('html').height() + 60; //extra space needed for score on bottom
	   window.parent.postMessage(JSON.stringify({subject: 'lti.frameResize', height: height +"px"}), '*');
}

function displayFirstQuestion(activity) {
    var questionNum = activity.currentQuestion;
    var questionStem = activity.questions[questionNum].question_stem;
    $questionArea.append((questionNum + 1) + '. ' + questionStem);
}

function displayNextQuestion(activity) {
    $questionArea.empty();
    var questionNum = activity.currentQuestion;
    var questionStem = activity.questions[questionNum].question_stem;
    $questionArea.append((questionNum + 1) + '. ' + questionStem);
    $questionArea.focus(); // for accessibility, focus to the question for a screenreader to read
    if (activity.questionType === 'c1' || activity.questionType === 'c2' || activity.questionType === 'c1_svg') {
        resetDragDrop(activity);
    }
    else if (activity.questionType === 'c3' || activity.questionType === 'c4') {
        resetHotSpot(activity);
    }
}

function displayScore(activity) {
    $scoreArea.empty();
    $scoreArea.append('Score: ' + activity.currentScore + '/' + activity.totalPoints);
}

function displayImageAnswerAreas(activity) {

    activity.answers.forEach(function(answer) {
        // droppable areas in image
        var answerAreaHtml = '<div class="' + answerableAreaDiv + ' image_dropzone" data-label="' + answer.name + '"' +
                             'data-trackable="1" data-contentCode="' + answer.name + '"' +
                             'data-eventLabel="imageAnswerArea"></div>';
        $answerArea.append(answerAreaHtml);
        var $thisAnswerArea = $('.image_dropzone[data-label="' + answer.name + '"]');
        $thisAnswerArea.css({
            left: answer.image_x + 'px',
            bottom: answer.image_y + 'px',
            width: answer.image_width + 'px',
            height: answer.image_height + 'px'
        });

        //droppable areas on labels
        var answerAreaLabelHtml = '<div class="' + answerableAreaDiv + ' label_dropzone" data-label="' + answer.name + '"' +
                                  'data-trackable="1" data-contentCode="' + answer.name + '"' +
                                  'data-eventLabel="labelAnswerArea"></div>';
        $answerArea.append(answerAreaLabelHtml);
        var $thisLabelAnswerArea = $('.label_dropzone[data-label="' + answer.name + '"]');
        $thisLabelAnswerArea.css({
            left: answer.label_x + 'px',
            bottom: answer.label_y + 'px',
            width: answer.label_width + 'px',
            height: answer.label_height + 'px'
        });

    });
}

function displayTextAnswerAreas(activity) {
    //adjust overall answer area's CSS position; had to be relatively positioned for drag and drop
    $answerArea.css({position: 'static', marginTop: '100px'});
    $answerArea.addClass('clearfix'); //for floated answers inside of div

    activity.answers.forEach(function(answer) {
        var answerAreaHtml = '<button class="' + answerableAreaDiv + ' ' + textAnswerDiv +
            '" data-trackable="1" data-label="' + answer.name + '" data-contentCode="' + answer.name +
            '" data-eventLabel="textAnswerArea">' + answer.name + '</button>';
        $answerArea.append(answerAreaHtml);
        var $thisAnswerArea = $('.' + answerableAreaDiv + '[data-label="' + answer.name + '"]');
    });
}

function wireDragDrop(activity) {

    $questionArea.addClass('draggable-hover');

    $draggable = $questionArea.draggable({
        helper: 'clone',
        revert: 'invalid',
        cursor: 'pointer',
		cursorAt: {
			left: $questionArea.width() / 2,
            top: $questionArea.height() / 2
		},
        opacity: 0.4
    });

    $answerable = $('.' + answerableAreaDiv); //initialize after image areas have been added

    //borders are invisible in C1 image, but should be visible for C2
    if (activity.questionType === 'c2') {
        $answerable.addClass('bordered');
    }

    $answerable.droppable({
        drop: handleDropEvent,
        over: handleOverEvent,
        out: handleOutEvent,
    });

    $reset.on('click', function (e) {
        e.preventDefault();
        //only allow a reset when the question has not yet been answered
        if ($('.correct').length === 0 && $('.incorrect').length === 0) {
            resetDragDrop(activity);
        }
    });
}

function resetDragDrop(activity) {
    $answerable = $('.' + answerableAreaDiv); //error from console, $answerable undefined?
    $draggable.draggable('enable');
    chosen = '';
    activity.chosen = '';
    $answerable.removeClass('answered');
	$answerable.removeClass('answer_hover');
    $answerable.removeClass('not-answered');
	$reset.css('visibility', 'hidden');
	$submit.css('visibility', 'hidden');

    if (activity.questionType === 'c1') {
        $('.' + answerableSVG).attr('class', answerableSVG);
    }
    else if (activity.questionType ==='c2') {
        $answerable.removeClass('answer_border')
        $answerable.addClass('bordered');
    }
}

function resetHotSpot(activity) {
    $answerableSVG = $('.' + answerableSVG);
    chosen = '';
    activity.chosen = '';
    $answerable.removeClass('answered');
	$answerable.removeClass('answer_hover');
    $answerableSVG.attr('class', answerableSVG);
	$reset.css('visibility', 'hidden');
	$submit.css('visibility', 'hidden');

    if (activity.questionType === 'c4') {
        $answerable.addClass('bordered');
    }
}

function handleDropEvent(event, ui) {
    $.ui.ddmanager.current.cancelHelperRemoval = true; //keep the clone after moving it, so we can animate it
    var draggable = ui.helper;
    var $droppable = $(this);

    //set the chosen var based on data-label of droppable
    activity.chosen = $(this).data('label');

    //get center of droppable coordinates for shrinking
    var droppableCenterX = $droppable.offset().left + $droppable.width() / 2;
    var droppableCenterY = $droppable.offset().top + $droppable.height() / 2;

    //shrink the draggable within the droppable
    draggable.animate({height: 0,
                       width: 0,
                       opacity: 0,
                       left: droppableCenterX,
                       top: droppableCenterY,
					   fontSize: '0px'
                      }, 1000, function() {
                        if (group === "C1") {
                            $answerable.addClass('not-answered');
                            $('.label_dropzone[data-label="' + activity.chosen + '"]').removeClass('not-answered').addClass('answered');
                        }
                        else { //C2
                           $droppable.removeClass('bordered');
                           $droppable.removeClass('answer_hover');
                           $droppable.addClass('answer_border'); //droppable boxes
                        }
                    });

    //disable the draggable
	draggable.draggable({disabled: true});
	ui.draggable.draggable({disabled: true});
	draggable.addClass('non-draggable');

	//show reset and submit buttons
	$reset.css('visibility', 'visible');
	$submit.css('visibility', 'visible');


}

function handleOverEvent(event, ui) {
    var draggable = ui.draggable;
    var $droppable = $(this);

    if (group === "C1") {
        var label = $droppable.data('label');

        var $hoveredSVG = $('.answerable_SVG').filter(function() {
            return $(this).data('label') === label;
        });
        $('.label_dropzone[data-label="' + label + '"]').addClass('answer_hover'); //droppable labels
        $hoveredSVG.attr('class', answerableSVG + ' ' + SVGhover);//SVG
    }
    else { //C2
       $droppable.removeClass('bordered');
	   $droppable.addClass('answer_hover'); //droppable boxes
    }

}

function handleOutEvent(event, ui) {
    var draggable = ui.draggable;
    var $droppable = $(this);

    if (group === "C1") { //C1
         var label = $droppable.data('label');

        var $hoveredSVG = $('.answerable_SVG').filter(function() {
            return $(this).data('label') === label;
        });

        $('.label_dropzone[data-label="' + label + '"]').removeClass('answer_hover'); //droppable labels
        $hoveredSVG.attr('class', answerableSVG);
    }
    else { //C2
        $droppable.removeClass('answer_hover');
        $droppable.addClass('bordered');
    }

}

function wireHotSpot(activity) {
    $answerable = $('.' + answerableAreaDiv); //initialize after image areas have been added

    //borders are invisible in C3 image, but should be visible for C4
    if (activity.questionType === 'c4') {
        $answerable.addClass('bordered');
    }

    $answerable.mouseenter(function() {
        if (activity.questionType === 'c3') {
            var label = $(this).data('label');

            var $hoveredSVG = $('.answerable_SVG').filter(function() {
                return $(this).data('label') === label;
            });
            $('.label_dropzone[data-label="' + label + '"]').addClass('answer_hover'); //droppable labels
            $hoveredSVG.attr('class', answerableSVG + ' ' + SVGhover);//SVG
            $(this).css('cursor', 'pointer'); //add pointer cursor on hover just for C3, when users are clicking on the SVG itself
        }
        else if (activity.questionType === 'c4') {
            $(this).removeClass('bordered');
            $(this).addClass('answer_hover');
        }

    });

    $answerable.mouseleave(function() {
        $(this).removeClass('answer_hover');
        if (activity.questionType === 'c3') {
            var label = $(this).data('label');

            var $hoveredSVG = $('.answerable_SVG').filter(function() {
                return $(this).data('label') === label;
            });
            $('.label_dropzone[data-label="' + label + '"]').removeClass('answer_hover'); //droppable labels
            if (label !== activity.chosen) { // only reset the SVG class if not clicked/answered
                $hoveredSVG.attr('class', answerableSVG);//SVG
            }
        }
        else if (activity.questionType === 'c4') {
            $(this).removeClass('bordered');
            $(this).addClass('answer_hover');
            if (!($(this).hasClass('answered'))) {
                $(this).addClass('bordered');
            }
        }
    });

    $answerable.click(function() {
        resetHotSpot(activity);
        activity.chosen = $(this).data('label');
        if (activity.questionType === 'c3') {
            var label = $(this).data('label');

            var $hoveredSVG = $('.answerable_SVG').filter(function() {
                return $(this).data('label') === label;
            });
            $('.label_dropzone[data-label="' + label + '"]').addClass('answered'); //droppable labels
            $hoveredSVG.attr('class', answerableSVG + ' ' + SVGanswer);//SVG
        }
        else if (activity.questionType === 'c4') {
            $(this).removeClass('answer_hover');
            $(this).removeClass('bordered');
            $(this).addClass('answered');
        }
        $submit.css('visibility', 'visible');
    });
}

function handleSubmitEvent(activity) {
    var isCorrect = 0;
    $('.' + submitResponseDiv).click(function() {
        //only do this if they haven't already submitted an answer...
        if ($('.correct').length === 0 && $('.incorrect').length === 0) {
            var correctAnswer = activity.questions[activity.currentQuestion].answer.name;
            if (activity.chosen === correctAnswer) {
                $next.removeClass('btn-danger');
                $next.addClass('btn-success');
                $feedbackText.html('Correct!');
                activity.currentScore++;
                isCorrect = 1;
            }
            else {
                $next.removeClass('btn-success');
                $next.addClass('btn-danger');
                $feedbackText.html('Incorrect.');
				activity.currentIncorrect++;
                isCorrect = 0;
            }
            $submit.css('visibility', 'hidden');
            $reset.css('visibility', 'hidden');

            //API datatracking
            customActivityData.apiInsertResponse({
                'question': activity.questions[activity.currentQuestion].question_stem,
                'answer': activity.chosen,
                'answer_key': correctAnswer,
                'is_correct': isCorrect
            });
            customActivityData.apiUpdateAttempt({
                'last_milestone': 'question phase',
                'count_correct': activity.currentScore,
                'count_incorrect': activity.currentIncorrect,
                'calculated_score': activity.currentScore / activity.totalPoints,
                'complete': '0'
            }, function() {
                $feedbackModal.modal('show');
            });
        }

    });
}

function handleNextEvent(activity) {
    $next.click(function() {
        activity.currentQuestion++;
        if (activity.currentQuestion >= activity.totalPoints) {
            completeGame(activity);
        }
        else {
            activity.displayNextQuestion(activity);
        }
    });
}

function handleRestartEvent(activity) {
    $restart.click(function() {
        //next button is hidden on last play, so un-hide it if they wish to restart after completion
        if (activity.currentQuestion >= activity.totalPoints) {
            $next.css('visibility', 'inherit');
        }
        activity.currentQuestion = 0;
        activity.currentScore = 0;
		activity.currentIncorrect = 0;
        activity.displayNextQuestion(activity);
		apiInitPlay(); // new play session
    });
}

function nextQuestionC1(activity) {
    $feedbackModal.modal('hide');
    displayNextQuestion(activity);
    displayScore(activity);
}

function nextQuestionC2(activity) {
    $feedbackModal.modal('hide');
    displayNextQuestion(activity);
    displayScore(activity);
}

function nextQuestionC3(activity) {
    $feedbackModal.modal('hide');
    displayNextQuestion(activity);
    displayScore(activity);
}

function nextQuestionC4(activity) {
    $feedbackModal.modal('hide');
    displayNextQuestion(activity);
    displayScore(activity);
}

function completeGame(activity) {
    customActivityData.apiUpdateAttempt({
        'last_milestone': 'completed',
        'count_correct': activity.currentScore,
        'count_incorrect': activity.currentIncorrect,
        'calculated_score': activity.currentScore / activity.totalPoints,
        'complete': '1'
    }, function() {
        $next.css('visibility', 'hidden');
        $feedbackText.html('');
        appendCheckmark();
        $feedbackText.append('<span class="clearfix">You have finished the test! <br> <br> Score: ' + activity.currentScore + '/' + activity.totalPoints + '</span>');
    });
}

function resizeInteractiveImage() {
    var svgWidth = $('svg').width(),
        svgHeight = $('svg').height(),
        xRatio = svgWidth / activity.imageWidth,
        yRatio = svgHeight / activity.imageHeight;

    console.log('svg width: ' + svgWidth + ', svg height: ' + svgHeight);
    console.log('x ratio: ' + xRatio + ', y ratio: ' +yRatio);

    activity.answers.forEach(function(answer) {
        //the X-Y coordinates and height + width fed in for the answers match the original ratio
        //by multiplying by the new ratio, they should all go to the right places
        answer.label_x = answer.label_x * xRatio;
        answer.label_y = answer.label_y * yRatio;
        answer.label_width = answer.label_width * xRatio;
        answer.label_height = answer.label_height * yRatio;
        answer.image_x = answer.image_x * xRatio;
        answer.image_y = answer.image_y * yRatio;
        answer.image_width = answer.image_width * xRatio;
        answer.image_height = answer.image_height * yRatio;
    });

    displayImageAnswerAreas(activity);
    wireDragDrop(activity);
}

function c1(params) {
    var activity = params.activity;

    customActivityData.apiInitAttempt();
    createHtmlScaffolding(activity);
    initHandlers();
    displayInstructions('Drag and drop each question box onto the location that corresponds to the correct answer.');
    displaySVG(activity);
    displayFirstQuestion(activity);
    displayScore(activity);
    displayImageAnswerAreas(activity);
    wireDragDrop(activity);
    handleSubmitEvent(activity);
    handleNextEvent(activity);
    handleRestartEvent(activity);
	resetDragDrop(activity);
}

function c2(params) {
    var activity = params.activity;

    customActivityData.apiInitAttempt();
    createHtmlScaffolding(activity);
    initHandlers();
    displayInstructions('Drag and drop each question box onto the location that corresponds to the correct answer.');
    displaySVG(activity);
    displayFirstQuestion(activity);
    displayScore(activity);
    displayTextAnswerAreas(activity);
    wireDragDrop(activity);
    handleSubmitEvent(activity);
    handleNextEvent(activity);
    handleRestartEvent(activity);
	resetDragDrop(activity);
}

function c3(params) {
    var activity = params.activity;

    customActivityData.apiInitAttempt();
    createHtmlScaffolding(activity);
    initHandlers();
    displayInstructions('Click the location that corresponds to the appropriate answer');
    displaySVG(activity);
    displayFirstQuestion(activity);
    displayScore(activity);
    displayImageAnswerAreas(activity);
    wireHotSpot(activity);
    handleSubmitEvent(activity);
    handleNextEvent(activity);
    handleRestartEvent(activity);
	resetHotSpot(activity);
}

function c4(params){
    var activity = params.activity;

    customActivityData.apiInitAttempt();
    createHtmlScaffolding(activity);
    initHandlers();
    displayInstructions('Click the location that corresponds to the appropriate answer');
    displaySVG(activity);
    displayFirstQuestion(activity);
    displayScore(activity);
    displayTextAnswerAreas(activity);
    wireHotSpot(activity);
    handleSubmitEvent(activity);
    handleNextEvent(activity);
    handleRestartEvent(activity);
	resetHotSpot(activity);
}

function Question(params) {
    this.question_stem = params.question_stem;
    this.answer = params.answer;
}

function Answer(params) {
    this.name = params.name;
    this.label_x = params.label_x;
    this.label_y = params.label_y;
    this.label_width = params.label_width;
    this.label_height = params.label_height;
    this.image_x = params.image_x;
    this.image_y = params.image_y;
    this.image_width = params.image_width;
    this.image_height = params.image_height;
}

function Activity(params) {
    this.questions = params.questions;
    this.answers = params.answers;
    this.questionType = params.questionType;
    this.currentQuestion = 0;
    this.currentScore = 0;
	this.currentIncorrect = 0;
    this.totalPoints = questions.length;
    this.chosen = '';
	this.attemptId = '';

    if (params.imageWidth && params.imageHeight) {
        this.imageWidth = params.imageWidth;
        this.imageHeight = params.imageHeight;
    }

    if (params.svg) {
        this.svg = params.svg;
    }

    if (params.questionType === 'c1') {
        this.init = c1;
        this.displayNextQuestion = nextQuestionC1;
    }
    else if (params.questionType === 'c2') {
        this.init = c2;
        this.displayNextQuestion = nextQuestionC2;
    }
    else if (params.questionType === 'c3') {
        this.init = c3;
        this.displayNextQuestion = nextQuestionC3;
    }
    else if (params.questionType === 'c4') {
        this.init = c4;
        this.displayNextQuestion = nextQuestionC4;
    }
}
