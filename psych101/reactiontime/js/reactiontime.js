var stage = 'start',
    $wrapper = $('.wrapper'),
    $displayArea = $('.display_area'),
    $textArea = $('.text_area'),
    $whiteCircle = $('.white_circle'),
    $blackCircle = $('.black_circle'),
    $restart = $('.restart'),
    trialCounter = 0,
    timeRecords = [],
    circleOrder = [],
    customActivityData = new CustomActivityData();

startPage();
handleRestart();

function startPage() {
    customActivityData.apiInitAttempt(); //datatracker
    $wrapper.addClass('inactive_wrapper');
    $textArea.html('Click to begin');
    $wrapper.click(function() {
        $wrapper.off(); //disable event handler
        simpleStageInstructions();
    });
}

function simpleStageInstructions() {
    stage = 'simple';
    $textArea.html('In the first part of this study, you will see a black background. Occasionally a white circle will appear. As soon as you see the white circle, press the space bar as quickly as possible. The circle will appear 15 times. <br> <br> Press the space bar to begin.');
    $('body').keypress(function(e) {
		e.preventDefault();
        var keyValue = String.fromCharCode(e.which);
        if (keyValue === " ") { //space bar
            $textArea.addClass('hidden');
            $('body').off(); //disable this event handler
            simpleStageActivity();
        }
    });
}

function simpleStageActivity() {
    var totalTrials = 15;

    resetScreenForTrial();
    trialCounter++;
    if (trialCounter <= totalTrials) {
        //in the simple stage, the background remains black the whole time
        //instead of gray and then changing the background color
        $wrapper.removeClass('inactive_wrapper');
        $wrapper.addClass('active_wrapper_white_circle');
        prepWhiteCircle();
    }
    else {
        complexStageInstructions();
    }
}

function complexStageInstructions() {
    var totalTrials = 20;
    trialCounter = 0; //reset

    //create a shuffled array of black and white circles for the order
    for (i = 0; i < totalTrials; i++) {
        if (i < Math.floor(totalTrials / 2)) {
            circleOrder.push('white');
        }
        else {
            circleOrder.push('black');
        }
    }
    shuffle(circleOrder); //shuffle the order randomly

    stage = 'complex';
    resetScreenForFeedback();
    $textArea.html('Good job. <br> <br> In this next part of the experiment, you\'ll need to make a choice. If a white circle appears, press J. If a black circle appears, press F. <br> <br> J for white circle. <br> F for black circle. <br> <br> Press F or J to begin.');
    $('body').keypress(function(e) {
        var keyValue = String.fromCharCode(e.which);
        if (keyValue === "f" || keyValue === "j") {
            $textArea.addClass('hidden');
            $('body').off(); //disable this event handler
            complexStageActivity();
        }
    });
}

function complexStageActivity() {
    var totalTrials = 20;

    resetScreenForTrial();
    trialCounter++;
    if (trialCounter <= totalTrials) {
        if (circleOrder[trialCounter - 1] === "white") { //trial counter is 1-indexed, array is 0-indexed
            prepWhiteCircle();
        }
        else {
            prepBlackCircle();
        }
    }
    else {
        resultsStage();
    }
}

function resultsStage() {
    //send game complete to the datatracker
    customActivityData.apiUpdateAttempt({
        'last_milestone': 'completed',
        'count_correct': '0',
        'count_incorrect': '0',
        'calculated_score': '1',
        'complete': '1'
    }, function() {
        var simpleAverage = 0,
            whiteAverage = 0,
            blackAverage = 0,
            simpleVariance = [],
            whiteVariance = [],
            blackVariance = [],
            simpleStdDev = 0,
            whiteStdDev = 0,
            blackStdDev = 0,
            data = [],
            simpleTrials = 15,
            whiteTrials = 10,
            blackTrials = 10,
            stage = 'results';
        resetScreenForFeedback();
        $textArea.html('All done! <br> <br> Click here to see your results.');
        $('body').click(function() {
            $('body').off(); //disable this event handler
            timeRecords.forEach(function(timeRecord) { //calculate averages
                if ('simple' in timeRecord) {
                    simpleAverage += (+timeRecord.simple);
                }
                else if ('white' in timeRecord) {
                    whiteAverage += (+timeRecord.white);
                }
                else if ('black' in timeRecord) {
                    blackAverage += (+timeRecord.black);
                }
            });

            simpleAverage = Math.ceil(simpleAverage / simpleTrials);
            whiteAverage = Math.ceil(whiteAverage / whiteTrials);
            blackAverage = Math.ceil(blackAverage / blackTrials);

            /* variance -- each value, minus the average, squared */
            timeRecords.forEach(function(timeRecord) {
                if ('simple' in timeRecord) {
                    simpleVariance.push(Math.pow(((+timeRecord.simple) - simpleAverage), 2));
                }
                else if ('white' in timeRecord) {
                    whiteVariance.push(Math.pow(((+timeRecord.white) - whiteAverage), 2));
                }
                else if ('black' in timeRecord) {
                    blackVariance.push(Math.pow(((+timeRecord.black) - blackAverage), 2));
                }
            });

            simpleStdDev = standardDeviation(simpleVariance, simpleStdDev, simpleTrials);
            whiteStdDev = standardDeviation(whiteVariance, whiteStdDev, whiteTrials);
            blackStdDev = standardDeviation(blackVariance, blackStdDev, blackTrials);

            data = [{"type": "Simple Reaction", "value": simpleAverage, "stdDev": simpleStdDev},
                    {"type": "Choice Black Circle", "value": blackAverage, "stdDev": whiteStdDev},
                    {"type": "Choice White Circle", "value": whiteAverage, "stdDev": blackStdDev}];
            $textArea.empty();
            $textArea.css('background-color', 'white');
            addChart(data);
        });
    });
}

function prepWhiteCircle() {
    var timeoutId,
        startTime,
        endTime,
        totalTime,
        minTime = 2000,
        maxTime = 4000,
        randomTime,
        timer;

    //timer
    randomTime = Math.random() * (maxTime - minTime) + minTime;
    timer = window.setTimeout(displayWhiteCircle, randomTime);
}

function displayWhiteCircle() {
    var timeoutId,
        startTime,
        endTime,
        totalTime,
        maxResponseTime = 2000;

    //set up background
    $wrapper.removeClass('inactive_wrapper');
    $wrapper.addClass('active_wrapper_white_circle');
    $whiteCircle.removeClass('hidden');
    $whiteCircle.addClass('visible');
    startTime = (new Date()).getTime();
    timeoutId = window.setTimeout(incorrectFeedback, maxResponseTime); //incorrect if 2 seconds passes
    $('body').keypress(function(e) {
		e.preventDefault();
        var keyValue = String.fromCharCode(e.which);
        $('body').off(); //disable this event handler
        if (keyValue === " " && stage === "simple") {
            endTime = (new Date()).getTime();
            totalTime = endTime - startTime;
            timeRecords.push({'simple': totalTime}); //push object to array for later tracking
            correctFeedback(timeoutId);
        }
        else if (keyValue === "j" && stage === "complex") {
            endTime = (new Date()).getTime();
            totalTime = endTime - startTime;
            timeRecords.push({'white': totalTime}); //push object to array for later tracking
            correctFeedback(timeoutId);
        }
        else {
            incorrectFeedback(timeoutId);
        }
    });
}

function prepBlackCircle() {
    var timeoutId,
        startTime,
        endTime,
        totalTime,
        minTime = 2000,
        maxTime = 4000,
        randomTime,
        timer;

    //timer
    randomTime = Math.random() * (maxTime - minTime) + minTime;
    timer = window.setTimeout(displayBlackCircle, randomTime);
}

function displayBlackCircle() {
    var timeoutId,
        startTime,
        endTime,
        totalTime,
        maxResponseTime = 2000;

    //set up background
    $wrapper.removeClass('inactive_wrapper');
    $wrapper.addClass('active_wrapper_black_circle');
    $blackCircle.removeClass('hidden');
    $blackCircle.addClass('visible');
    startTime = (new Date()).getTime();
    timeoutId = window.setTimeout(incorrectFeedback, maxResponseTime); //incorrect if 2 seconds passes
    $('body').keypress(function(e) {
        var keyValue = String.fromCharCode(e.which);
        $('body').off(); //disable this event handler
        if (keyValue === "f" && stage === "complex") {
            endTime = (new Date()).getTime();
            totalTime = endTime - startTime;
            timeRecords.push({'black': totalTime}); //push object to array for later tracking
            correctFeedback(timeoutId);
        }
        else {
            incorrectFeedback(timeoutId);
        }
    });
}

function resetScreenForFeedback() {
    $whiteCircle.removeClass('visible');
    $whiteCircle.addClass('hidden');
    $blackCircle.removeClass('visible');
    $blackCircle.addClass('hidden');
    $wrapper.removeClass('active_wrapper_white_circle');
    $wrapper.removeClass('active_wrapper_black_circle');
    $wrapper.addClass('inactive_wrapper');
    $textArea.removeClass('hidden');
    $textArea.addClass('visible');
}

function resetScreenForTrial() {
    $textArea.removeClass('visible');
    $textArea.addClass('hidden');
}

function correctFeedback(timeoutId) {
    window.clearTimeout(timeoutId); //clear the timer for max response time (2 seconds)
    resetScreenForFeedback();
    $textArea.html('Good!');
    $textArea.removeClass('hidden');
    $textArea.addClass('visible');
    if (stage === 'simple') {
        window.setTimeout(simpleStageActivity, 1000);
    }
    else if (stage === 'complex') {
        window.setTimeout(complexStageActivity, 1000);
    }
}

function incorrectFeedback(timeoutId) {
    $('body').off(); //disable the event handler for keypress that was not used
    window.clearTimeout(timeoutId); //clear timeout for max time
    resetScreenForFeedback();
    if (stage === 'simple') {
        $textArea.html('<span class="incorrect">Incorrect</span> <br> <br> Press space bar for white circle <br> <br> ');
    }
    else if (stage === 'complex') {
        $textArea.html('<span class="incorrect">Incorrect</span> <br> <br> J for white circle <br> F for black circle <br> <br> ');
    }

    $textArea.removeClass('hidden');
    $textArea.addClass('visible');
    //student has to wait 2 seconds before pressing a button to continue
    window.setTimeout(incorrectFeedbackContinue, 2000);

}

function incorrectFeedbackContinue() {
    if (stage === "simple") {
        $textArea.append('Press space bar to continue');
    }
    else if (stage === "complex") {
        $textArea.append('Press F or J to continue.');
    }
    $('body').keypress(function(e) {
        var keyValue = String.fromCharCode(e.which);
        trialCounter--; //incorrect doesn't count
        if (keyValue === " " && stage === "simple") { //space bar
            $('body').off(); //disable this event handler
            simpleStageActivity();
        }
        else if ((keyValue === "f" || keyValue === "j") && stage === "complex") {
            $('body').off(); //disable this event handler
            complexStageActivity();
        }
    });
}

function handleRestart() {
    $('.restart').click(function() {
        //hard page refresh
        //there is no easy way to clear all window timers, unfortunately
        window.location.reload();
    });
}

//http://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array-in-javascript
function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

function standardDeviation(varianceArray, stdDev, n) {
    varianceArray.forEach(function(varianceValue) {
        stdDev += varianceValue;
    });

    stdDev = stdDev / (n - 1);
    stdDev = Math.sqrt(stdDev);
    return stdDev;
}

//http://bl.ocks.org/mbostock/3885304
function addChart(data) {
    var margin = {top: 20, right: 20, bottom: 30, left: 40},
        width = 480 - margin.left - margin.right,
        height = 250 - margin.top - margin.bottom;

    var x = d3.scale.ordinal()
        .rangeRoundBands([0, width], .1);

    var y = d3.scale.linear()
        .range([height, 0]);

    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom");

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left")
        .ticks(9);

    var svg = d3.select(".text_area").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      x.domain(data.map(function(d) { return d.type; }));
      y.domain([0, d3.max(data, function(d) { return d.value + d.stdDev; })]);

      svg.append("g")
          .attr("class", "x axis")
          .attr("transform", "translate(0," + height + ")")
          .call(xAxis);

      svg.append("g")
          .attr("class", "y axis")
          .call(yAxis)
        .append("text")
          .attr("transform", "rotate(-90)")
          .attr("y", 6)
          .attr("dy", "-37px")
          .attr("dx", "-45px")
          .style("text-anchor", "end")
          .text("Response Time (ms)");


      svg.selectAll(".bar")
          .data(data)
          .enter().append("rect")
          .attr("class", "bar")
          .attr("x", function(d) { return x(d.type); })
          .attr("width", x.rangeBand())
          .attr("y", function(d) { return y(d.value); })
          .attr("height", function(d) { return height - y(d.value); });

      svg.selectAll(".errorBar")
        .data(data)
        .enter().append("rect")
        .attr("class", "errorBar")
        .attr("x", function(d) { return x(d.type) + x.rangeBand()/2})
        .attr("width", 1.5)
        .attr("y", function(d) { return y(d.value + d.stdDev)})
        .attr("height", function(d) { return height - y(d.stdDev * 2)})
        .attr("stroke", "black");

        function type(d) {
          d.value = +d.value;
          return d;
        }
}
