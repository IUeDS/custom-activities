//For devs:
//In story.html file, need to add:
//CSS in head:
//<link href="../../../plugins/edsdata/bootstrap.min.css" rel="stylesheet" type="text/css"/>
//js:
//<script src="https://code.jquery.com/jquery-2.2.4.min.js"
//  integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44="
//  crossorigin="anonymous"></script>
//<script src="../../../plugins/edsdata/bootstrap.min.js" type="text/javascript"></script>
//<script src="../../../plugins/edsdata/customActivityData.js" type="text/javascript"></script>
//<script src="../storyline_data.js" type="text/javascript"></script>

//Tips:
//Shift + S to skip video (this only works in story_html5.html, though...production file has cheat disabled)
//Answer is: inspect phono preamplifier => inspect back => connect ground

var customActivityData = new CustomActivityData(),
    countIncorrect = 0;

//so the existing code in storyline doesn't need to be extensively rewritten,
//map the old function declarations to the new data tracking functionality
function initAttempt(params) {
    customActivityData.apiInitAttempt(params);
}

//in this activity, getting to the correct response means the game is complete, they've "won".
//We need to track incorrect attempts, and what they clicked on (the responseText).
//Simplified as one call coming out of storyline, can break into specific
function storylineUpdate(params) {
    //in the previous version, data was translated with different variable names
    //for some reason? some required data also does not change throughout the activity.
    params.is_correct = params.correct ? 1 : 0;
    params.question = 'There is a noise whenever transferring disks in a record player.';
    params.answer = params.name;
    params.answer_key = "ground";

    //send the response
    sendResponse(params);

    //only update the attempt once complete, since questions are not for-credit
    if (params.correct === true) {
        params.last_milestone = 'complete';
        params.count_correct = 1;
        params.count_incorrect = countIncorrect;
        params.calculated_score = 1;
        params.complete = 1;
        updateAttempt(params);
    }
    else {
        countIncorrect++;
    }
}

function sendResponse(params) {
    customActivityData.apiInsertResponse(params);
}

function updateAttempt(params) {
    customActivityData.apiUpdateAttempt(params);
}