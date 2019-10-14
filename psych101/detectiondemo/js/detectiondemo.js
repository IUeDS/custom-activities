var stage = 'start',
    $wrapper = $('.wrapper'),
    $displayArea = $('.display_area'),
    $textArea = $('.text_area'),
    $whiteCircle = $('.white_circle'),
    $crosshair = $('.crosshair'),
    $restart = $('.restart'),
    trialCounter = 0,
    totalTrials = 40,
    //totalTrials = 5,
    records = [],
    circleOrder = [],
    customActivityData = new CustomActivityData();

startPage();
handleRestart();

function startPage() {
    customActivityData.apiInitAttempt(); //datatracker
    $textArea.html('Click to begin');
    $wrapper.click(function() {
        $wrapper.off(); //disable event handler
        beginningInstructions();
        setLtiHeight();
    });
}

function setLtiHeight() {
	   var height = $('html').height() + 60; //extra space just in case
	   window.parent.postMessage(JSON.stringify({subject: 'lti.frameResize', height: height +"px"}), '*');
}

function beginningInstructions() {
    stage = 'simple';
    $textArea.html('In this activity, you will see a black background with a fixation point in the middle. Occasionally, a small gray circle will appear somewhere. As soon as you see the circle, press the space bar as quickly as possible. The circle will appear about 40 times. <br> <br> During the experiment, try to keep your eyes focused on the cross in the center of the screen. The circles will appear in random locations around the cross. Many of the circles will be too dim for you to detect, but that\'s okay. Try hard, and only press the space bar when you think you saw a circle. <br> <br> Press the space bar to begin.');
    $('body').keypress(function(e) {
        var keyValue = String.fromCharCode(e.which);
        if (keyValue === " ") { //space bar
			e.preventDefault();
            $textArea.addClass('hidden');
            $('body').off(); //disable this event handler
            beginActivity();
        }
    });
}

function beginActivity() {
    var fifthTrials = Math.floor(totalTrials / 5);

    //create a shuffled array of brightnesses, at 2%, 4%, 6%, 8%, and 10%
    for (i = 0; i < totalTrials; i++) {
        if (i < fifthTrials) {
            circleOrder.push(2);
        }
        else if (i < fifthTrials * 2) {
            circleOrder.push(4);
        }
        else if (i < fifthTrials * 3) {
            circleOrder.push(6);
        }
        else if (i < fifthTrials * 4) {
            circleOrder.push(8);
        }
        else {
            circleOrder.push(10);
        }
    }
    shuffle(circleOrder); //shuffle the order randomly

    //insert 20% white circle for first, second, fourth, and tenth trials
    circleOrder.splice(0, 0, 20);
    circleOrder.splice(1, 0, 20);
    circleOrder.splice(3, 0, 20);
    circleOrder.splice(9, 0, 20);
    totalTrials += 4;

    beginTrial();
}

function beginTrial() {
    resetScreenForTrial();
    trialCounter++;

    if (trialCounter <= totalTrials) {
        prepWhiteCircle();
    }
    else {
        resultsStage();
    }
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

    $crosshair.removeClass('hidden');
    $crosshair.addClass('visible');

    //timer
    randomTime = Math.random() * (maxTime - minTime) + minTime;
    timer = window.setTimeout(displayWhiteCircle, randomTime);

    //if the user hits the space bar too early
    $('body').keypress(function(e) {
        var keyValue = String.fromCharCode(e.which);
        if (keyValue === " ") {
			e.preventDefault();
            $('body').off(); //disable this event handler
            incorrectFeedback(timer, true);
        }
    });
}

function displayWhiteCircle() {
    var timeoutId,
        startTime,
        endTime,
        totalTime,
        maxResponseTime = 2000,
        currentBrightness = String(circleOrder[trialCounter - 1]) + '%',
        randomLocationTop = 0,
        randomLocationLeft = 0,
        marginLeftMin = -50,
        marginLeftMax = 50,
        marginTopMin = -100,
        marginTopMax = 150,
        marginTopMinCrosshair = -50,
        marginTopMaxCrosshair = 100;

    //disable the event handler waiting for an early space bar hit
    $('body').off();

    randomLocationLeft = Math.random() * (marginLeftMax - marginLeftMin) + marginLeftMin;
    randomLocationTop = Math.random() * (marginTopMax - marginTopMin) + marginTopMin;

    //if the random location overlaps with the crosshair, then find a new location
    while (randomLocationTop >= marginTopMinCrosshair && randomLocationTop <= marginTopMaxCrosshair) {
        randomLocationTop = Math.random() * (marginTopMax - marginTopMin) + marginTopMin;
    }

    $whiteCircle.css('background-color', 'hsla(0, 0%, ' + currentBrightness + ', 1)');
    //$whiteCircle.css('background-color', 'white');
    $whiteCircle.css('margin-top', randomLocationTop);
    $whiteCircle.css('margin-left', randomLocationLeft);
    $whiteCircle.removeClass('hidden');
    $whiteCircle.addClass('visible');
    timeoutId = window.setTimeout(incorrectFeedback, maxResponseTime); //incorrect if 2 seconds passes
    $('body').keypress(function(e) {
        var keyValue = String.fromCharCode(e.which);
        $('body').off(); //disable this event handler
        if (keyValue === " ") {
			e.preventDefault();
            correctFeedback(timeoutId);
        }
        else {
            incorrectFeedback(timeoutId);
        }
    });
}

function resetScreenForFeedback() {
    $crosshair.removeClass('visible');
    $crosshair.addClass('hidden');
    $whiteCircle.removeClass('visible');
    $whiteCircle.addClass('hidden');
    $textArea.removeClass('hidden');
    $textArea.addClass('visible');
}

function resetScreenForTrial() {
    $textArea.removeClass('visible');
    $textArea.addClass('hidden');
}

function correctFeedback(timeoutId) {
    records.push({'brightness': circleOrder[trialCounter - 1], 'correct': true}); //push object to array for later tracking
    window.clearTimeout(timeoutId); //clear the timer for max response time (2 seconds)
    resetScreenForFeedback();
    $textArea.html('Good!');
    $textArea.removeClass('hidden');
    $textArea.addClass('visible');
    window.setTimeout(beginTrial, 1000);
}

function incorrectFeedback(timeoutId, earlyError) {
    $('body').off(); //disable the event handler for keypress that was not used
    window.clearTimeout(timeoutId); //clear timeout for max time
    resetScreenForFeedback();
    if (earlyError === true) { //user hit the space bar too early
        trialCounter--; //incorrect doesn't count
        $textArea.html('Either you have super-human visual capabilities, or you\'re pressing the space bar even when you don\'t see a circle. We\'re gonna start the experiment again. This time, only press the space bar when you see a circle appear somewhere around the fixation cross. <br> <br> Press the space bar to continue.');
    }
    else { //user missed the circle
        records.push({'brightness': circleOrder[trialCounter - 1], 'correct': false}); //push object to array for later tracking
        $textArea.html('Press the space bar to continue');
    }
    $textArea.removeClass('hidden');
    $textArea.addClass('visible');
    $('body').keypress(function(e) {
        var keyValue = String.fromCharCode(e.which);
        if (keyValue === " ") { //space bar
			e.preventDefault();
            $('body').off(); //disable this event handler
            beginTrial();
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

function resultsStage() {
    //send game complete to the datatracker
    customActivityData.apiUpdateAttempt({
        'last_milestone': 'completed',
        'count_correct': '0',
        'count_incorrect': '0',
        'calculated_score': '1',
        'complete': '1'
    }, function() {
        totalTrials -= 4; //cut the 4 20% trials out, they are not part of the averages
        var twoCorrect = 0,
            fourCorrect = 0,
            sixCorrect = 0,
            eightCorrect = 0,
            tenCorrect = 0,
            data = [],
            typeTrials = totalTrials / 5,
            stage = 'results';
        resetScreenForFeedback();
        $textArea.html('All done! <br> <br> Click here to see your results.');
        $('body').click(function() {
            $('body').off(); //disable this event handler
            //console.log(records);
            records.forEach(function(record) { //calculate averages
                if (record.brightness === 2 && record.correct === true) {
                    twoCorrect++;
                }
                else if (record.brightness === 4 && record.correct === true) {
                    fourCorrect++;
                }
                else if (record.brightness === 6 && record.correct === true) {
                    sixCorrect++;
                }
                else if (record.brightness === 8 && record.correct === true) {
                    eightCorrect++;
                }
                else if (record.brightness === 10 && record.correct === true) {
                    tenCorrect++;
                }
            });

            twoCorrect = Math.ceil((twoCorrect / typeTrials) * 100);
            fourCorrect = Math.ceil((fourCorrect / typeTrials) * 100);
            sixCorrect = Math.ceil((sixCorrect / typeTrials) * 100);
            eightCorrect = Math.ceil((eightCorrect / typeTrials) * 100);
            tenCorrect = Math.ceil((tenCorrect / typeTrials) * 100);

            data = [{"brightness": 0, "correct": 0},
                    {"brightness": 2, "correct": twoCorrect},
                    {"brightness": 4, "correct": fourCorrect},
                    {"brightness": 6, "correct": sixCorrect},
                    {"brightness": 8, "correct": eightCorrect},
                    {"brightness": 10, "correct": tenCorrect}];
            //console.log(data);
            $textArea.empty();
            addChart(data);
        });
    });
}

//http://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array-in-javascript
function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

function addChart(data) {
    var margin = {top: 20, right: 20, bottom: 70, left: 40},
        width = 480 - margin.left - margin.right,
        height = 350 - margin.top - margin.bottom;

    //append a results section for text before appending the chart
    d3.select('.text_area')
        .append('div')
        .attr('class', 'result_text');

    //var xTickWidth = margin.left + ((width - (margin.left + margin.right)) / 6);
    var xTickWidth = width / 5;

    //var x = d3.scale.ordinal()
    var x = d3.scale.linear()
        //.range([0, width]);
        .range([
            margin.left, // 0
            xTickWidth * 1, //2
            xTickWidth * 2, //4
            xTickWidth * 3, //6
            xTickWidth * 4, //8
            xTickWidth * 5 //10
        ]);

    //var yTickWidth = margin.bottom + ((height - (margin.bottom + margin.top)) / 2);
    var yTickWidth = height / 2;

    //var y = d3.scale.ordinal()
    var y = d3.scale.linear()
        //.range([height, 0]);
        .range([
            yTickWidth * 2, //100%
            yTickWidth * 1, //50%
            0, //0
        ]);

    x.domain([0, 2, 4, 6, 8, 10]);
    y.domain([0, 50, 100]);

    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom")
        .tickValues([0, 2, 4, 6, 8, 10])
        .tickFormat(function(d) { return d + "%" });

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("right")
        .tickValues([0, 50, 100])
        .tickFormat(function(d) { return d + "%" })
        .tickSize(width - margin.left);

    var svg = d3.select(".text_area").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


      svg.append("g")
          .attr("class", "x axis")
          //.attr("transform", "translate(" + (0 - margin.left) + "," + (height + margin.top + 10) + ")")
          //.attr("transform", "translate(0," + (height + margin.top + 10) + ")")
          .attr("transform", "translate(0," + (height) + ")")
          .call(xAxis)
          .append("text")
          .text("Lightness")
          .attr("class", "axis-label")
          .attr("dy", "35px")
          .attr("dx", "200px");

      var drawnY = svg.append("g")
          .attr("class", "y axis")
          .attr("transform", "translate(" + margin.left + "," + 0 +")") //new
          .call(yAxis);

    //the y axis lines should be oriented right, but the text needs to be to the left of the axis
    drawnY.selectAll("text")
        .attr("x", -30);

    //append label
    drawnY.append("text")
          .attr("transform", "rotate(-90)")
          .attr("class", "axis-label")
          .attr("dy", "-50px")
          .attr("dx", "-100px")
          .style("text-anchor", "end")
          .text("Accuracy");

    svg.selectAll("circle")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", function(d) {
            return x(d.brightness);
        })
        .attr("cy", function(d) {
            return y(d.correct);
        })
        .attr("r", "5")
        .attr("stroke", "white")
        .attr("fill", "white");

    //http://bl.ocks.org/d3noob/b3ff6ae1c120eea654b5
    var valueline = d3.svg.line()
        .x(function(d) { return x(d.brightness)})
        .y(function(d) { return y(d.correct)});

    var plottedLine = svg.append("path")
        .attr("class", "line")
        .attr("d", valueline(data));

    //get the Y-value (range) of where 50% is on the Y-axis (domain)
    var y50Location = y(50);
    //console.log('y location: ' + y50Location);

    //next, find the point on the plotted line where it first intersects with the 50% location
    //var xBisection = findXatYbyBisection(y50Location, x, d3.select(".line")[0][0]);
    var xBisection = findFirstXatYBisection(y50Location, d3.select(".line")[0][0]);
    var resultAccuracy = Math.round(x.invert(xBisection));
    //console.log('x bisection: ' + xBisection);
    //console.log('bisection in domain: ' + Math.round(x.invert(xBisection)));

    if (xBisection === 0) { //default return value, never crossed 50%
        d3.select('.result_text').html('We estimate that your absolute detection threshold is > 10% increase in lightness.');
    }
    else {
        d3.select('.result_text').html('We estimate that your absolute detection threshold is just a ' + resultAccuracy + '% increase in lightness.');
        svg.append("line")
            .attr("class", "intersect-line")
            .attr("x1", xBisection)
            .attr("x2", xBisection)
            .attr("y1", y(0))
            .attr("y2", y50Location);
    }

    //if it does not intersect, then default; don't draw the line and say the estimate is greater than 10%

}

//revised version of the following:
//http://stackoverflow.com/questions/11503151/in-d3-how-to-get-the-interpolated-line-data-from-a-svg-line
/*
var findXatYbyBisection = function(y, xScale, path, error){
  var length_end = path.getTotalLength()
    , length_start = 0
    , point = path.getPointAtLength((length_end + length_start) / 2) // get the middle point
    , bisection_iterations_max = 50
    , bisection_iterations = 0;

  error = error || 0.01;

  while (y > point.y - error || y < point.y + error) {
    // get the middle point
    point = path.getPointAtLength((length_end + length_start) / 2);
    console.log('point x in domain: ' + xScale.invert(point.x));
    console.log('y in function parameters: ' + y);
    console.log('point y: ' + point.y);

    if (y > point.y) {
      length_end = (length_start + length_end)/2;
    } else {
      length_start = (length_start + length_end)/2;
    }

    // Increase iteration
    if(bisection_iterations_max < ++ bisection_iterations)
      break;
  }
  return point.x;
}
*/

//I know this is incredibly inefficient, at O(N) where N = 1000, but using
//a divide and conquer O(log(N)) function does not give accurate results when
//there are multiple points where the line crosses 50%; I had to proceed linearly
//in order to find the very FIRST point where the line crosses 50%
function findFirstXatYBisection(y, path) {
    var length_end = path.getTotalLength(),
        length_start = 0,
        iterations = 1000,
        point;

    error = 1;

    for (i = 0; i < iterations; i++) {
        point = path.getPointAtLength(length_start + (length_end / iterations) * i);
        //console.log('point x: ' + point.x);
        if (y > point.y - error && y < point.y + error) {
            return point.x;
        }
    }

    //default to 0 if the user never goes past 50%
    return 0;
}

