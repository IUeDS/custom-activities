var stage = 'start',
    score = 0,
    maxDataPoints = 6,
    questionNum = 0,
    $restart = $('.restart'),
    $question = $('.question'),
    $startButton = $('.start-button'),
    $submit = $('.submit'),
    $resetData = $('.reset-data'),
    $scoreArea = $('.score-area'),
    $score = $('.score'),
    $chart = $('.chart'),
    $table = $('.table table'),
    $feedback = $('.feedback'),
    $continue = $('.continue'),
    $yAxisTableValues = $('.table table tbody td:nth-child(2)'),
    $xAxisTableValues = $('.table table tbody td:nth-child(3)'),
    customActivityData = new CustomActivityData();

/* D3 globals -- need this to set x and y scale across functions */
var margin = {top: 20, right: 20, bottom: 60, left: 60},
    width = 400 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

var x = d3.scale.linear()
    .range([0, width]);

var y = d3.scale.linear()
    .range([height, 0]);

var formatAxisOneDecimal = d3.format('.1f'); //for 1 decimal place in axis
var formatAxisWhole = d3.format('.0f'); //for whole numbers in axis

function Question(params) {
    this.question = params.question;
    this.interface = params.interface;
    this.xAxisTitle = params.xAxisTitle;
    this.xAxisLow = params.xAxisLow;
    this.xAxisHigh = params.xAxisHigh;
    this.yAxisTitle = params.yAxisTitle;
    this.yAxisLow = params.yAxisLow;
    this.yAxisHigh = params.yAxisHigh;
    this.answerRangeLow = params.answerRangeLow;
    this.answerRangeHigh = params.answerRangeHigh;
    this.correlation = params.correlation;
    this.ticksX = params.ticksX;
    this.ticksY = params.ticksY;
    this.axisFormat = params.axisFormat ? params.axisFormat : 'whole'; //some require decimal places, others not
}

function Activity(params) {
    this.questions = params.questions;
    this.currentQuestion = -1;
    this.currentScore = 0;
	this.currentIncorrect = 0;
    this.currentAnswer = 0;
    this.totalPoints = params.questions.length;
    this.correlation = 0;
    this.numDataPoints = 0;
    this.dataPoints = [];
	this.playId = '';
}

init();

function init() {
    var question1 = new Question({
        'question': 'There is a small negative correlation between a student&#39;s grade in a class (measured as a percent score), and how far the student sat from the front of the class (in feet).',
        'interface': 'scatterplot',
        //'interface': 'data entry',
        'xAxisTitle': 'Course Grade (percent score)',
        'xAxisLow': 50,
        'xAxisHigh': 100,
        'yAxisTitle': 'Distance from front of class (feet)',
        'yAxisLow': 0,
        'yAxisHigh': 100,
        'answerRangeLow': -0.5,
        'answerRangeHigh': -0.1,
        'correlation': 'small negative',
        'ticksX': [50, 60, 70, 80, 90, 100],
        'ticksY': [0, 20, 40, 60, 80, 100]
    });
    var question2 = new Question({
        'question': 'The amount of time a child waits during the marshmallow experiment has a strong positive relationship with the child&#39;s future performance on the SAT.',
        'interface': 'scatterplot',
        'xAxisTitle': 'SAT Score',
        'xAxisLow': 600,
        'xAxisHigh': 2400,
        'yAxisTitle': 'Time (minutes)',
        'yAxisLow': 0,
        'yAxisHigh': 15,
        'answerRangeLow': 0.4,
        'answerRangeHigh': 1,
        'correlation': 'strong positive',
        'ticksX': [600, 960, 1320, 1680, 2040, 2400],
        'ticksY': [0, 3, 6, 9, 12, 15]
    });
    var question3 = new Question({
        'question': 'There is a weak negative relationship between the number of donuts that someone eats (monthly), and the amount of time that person can hold their breath underwater (in seconds).',
        'interface': 'data entry',
        'xAxisTitle': 'Holding breath (seconds)',
        'xAxisLow': 0,
        'xAxisHigh': 300,
        'yAxisTitle': 'Donuts (monthly)',
        'yAxisLow': 0,
        'yAxisHigh': 50,
        'answerRangeLow': -0.5,
        'answerRangeHigh': -0.1,
        'correlation': 'weak negative',
        'ticksX': [0, 60, 120, 180, 240, 300],
        'ticksY': [0, 10, 20, 30, 40, 50]
    });
    var question4 = new Question({
        'question': 'There is a strong positive correlation between the number of minutes a day someone reads to a child, and the child&#39;s reading ability in elementary school (percent ranking).',
        'interface': 'data entry',
        'xAxisTitle': 'Reading time (minutes)',
        'xAxisLow': 0,
        'xAxisHigh': 100,
        'yAxisTitle': 'Reading ability',
        'yAxisLow': 0,
        'yAxisHigh': 100,
        'answerRangeLow': 0.4,
        'answerRangeHigh': 1,
        'correlation': 'strong positive',
        'ticksX': [0, 20, 40, 60, 80, 100],
        'ticksY': [0, 20, 40, 60, 80, 100]
    });
    var question5 = new Question({
        'question': 'There is a moderate positive correlation between the number of times that a child is spanked in a week and the total number of times he/she gets suspended in school.',
        'interface': 'scatterplot',
        'xAxisTitle': 'Spanking incidents (weekly)',
        'xAxisLow': 0,
        'xAxisHigh': 5,
        'yAxisTitle': 'Times Suspended (total)',
        'yAxisLow': 0,
        'yAxisHigh': 40,
        'answerRangeLow': 0.3,
        'answerRangeHigh': 0.7,
        'correlation': 'moderate positive',
        'ticksX': [0, 1, 2, 3, 4, 5],
        'ticksY': [0, 8, 16, 24, 32, 40 ]
    });
    var question6 = new Question({
        'question': 'There is a moderate negative correlation between the number of people going to bowling alleys (weekly) and the number of crime reports of domestic violence received in that same time.',
        'interface': 'data entry',
        'xAxisTitle': 'Domestic Violence Incidents (weekly)',
        'xAxisLow': 0,
        'xAxisHigh': 30,
        'yAxisTitle': 'Total bowling alley visits (weekly)',
        'yAxisLow': 0,
        'yAxisHigh': 500,
        'answerRangeLow': -0.7,
        'answerRangeHigh': -0.3,
        'correlation': 'moderate negative',
        'ticksX': [0, 6, 12, 18, 24, 30],
        'ticksY': [0, 100, 200, 300, 400, 500]
    });
    var question7 = new Question({
        'question': 'There is a strong negative correlation between college GPA and the average number of alcoholic drinks consumed (weekly). ',
        'interface': 'scatterplot',
        'xAxisTitle': 'GPA',
        'xAxisLow': 0,
        'xAxisHigh': 4,
        'yAxisTitle': 'Alcoholic Drinks (weekly)',
        'yAxisLow': 0,
        'yAxisHigh': 20,
        'answerRangeLow': -1,
        'answerRangeHigh': -0.4,
        'correlation': 'strong negative',
        'ticksX': [0, 1, 2, 3, 4],
        'ticksY': [0, 4, 8, 12, 16, 20]
    });
    var question8 = new Question({
        'question': 'There is a weak negative correlation between the average amount of time people spent watching TV each day (in hours) and life expectancy (in years).',
        'interface': 'data entry',
        'xAxisTitle': 'TV watching (hours)',
        'xAxisLow': 0,
        'xAxisHigh': 12,
        'yAxisTitle': 'Life Expectancy (years)',
        'yAxisLow': 25,
        'yAxisHigh': 95,
        'answerRangeLow': -0.5,
        'answerRangeHigh': -0.1,
        'correlation': 'weak negative',
        'ticksX': [0, 3, 6, 9, 12],
        'ticksY': [25, 39, 53, 67, 81, 95]
    });
    var question9 = new Question({
        'question': 'There is a moderate positive correlation between a person&#39;s job satisfaction (on a 10-point scale) and how funny their boss is (also on a 10-point scale).',
        'interface': 'data entry',
        'xAxisTitle': 'Supervisor\'s sense of humor (1-10)',
        'xAxisLow': 1,
        'xAxisHigh': 10,
        'yAxisTitle': 'Job satisfaction (1-10)',
        'yAxisLow': 1,
        'yAxisHigh': 10,
        'answerRangeLow': 0.3,
        'answerRangeHigh': 0.7,
        'correlation': 'moderate positive',
        'ticksX': [1, 2.5, 5, 7.5, 10],
        'ticksY': [1, 2.5, 5, 7.5, 10],
        'axisFormat': 'one-decimal'
    });
    var question10 = new Question({
        'question': 'There is a moderate positive correlation between the amount of neural activity in the insular cortex when looking at someone else, and how much they love the person that they&#39;re looking at.',
        'interface': 'scatterplot',
        'xAxisTitle': 'Insular activity (percent)',
        'xAxisLow': 0,
        'xAxisHigh': 100,
        'yAxisTitle': 'Love (percent)',
        'yAxisLow': 0,
        'yAxisHigh': 100,
        'answerRangeLow': 0.3,
        'answerRangeHigh': 0.7,
        'correlation': 'moderate positive',
        'ticksX': [0, 20, 40, 60, 80, 100],
        'ticksY': [0, 20, 40, 60, 80, 100]
    });
    var activity = new Activity({'questions': [question1, question2, question3, question4, question5,
                                              question6, question7, question8, question9, question10]});

    customActivityData.apiInitAttempt();
    startPage(activity);
    handleRestart();
    handleResetData(activity);
    handleSubmit(activity);
}

function setLtiHeight() {
	   var height = $('html').height() + 60;
        console.log(height);
	   window.parent.postMessage(JSON.stringify({subject: 'lti.frameResize', height: height +"px"}), '*');
}

function getCurrentQuestion(activity) {
    return activity.questions[activity.currentQuestion];
}

function startPage(activity) {
    $question.hide();
    $table.hide();
    $submit.hide();
    $resetData.hide();
    $continue.hide();

    $startButton.click(function() {
        $startButton.hide();
        $question.show();
        $table.show();
        $submit.show();
        $resetData.show();
        $continue.show();
        nextQuestion(activity);
    });
}

function handleRestart() {
    $('.restart').click(function() {
        //hard page refresh
        window.location.reload();
    });
}

function showQuestion(activity) {
    var currentQuestion = getCurrentQuestion(activity),
        instructionsStem = "<br><br><strong>Enter 6 observations that simulate this relationship by ",
        action;
    if (currentQuestion.interface === "scatterplot") {
        action = "clicking on the scatterplot.</strong>";
    }
    else {
        action = "writing data in the table.</strong>";
    }
    $question.html((activity.currentQuestion + 1) + '. '
                    + currentQuestion.question
                    + instructionsStem + action);
}

function nextQuestion(activity) {
    //$feedback.css('visibility', 'hidden');
    $feedback.css('display', 'none');
    //$continue.css('display', 'none');
    $continue.addClass('button-inactive');
    activity.currentQuestion++;
    if (activity.currentQuestion + 1 <= activity.totalPoints) { //currentQuestion is 0-indexed
        cleanCurrentData(activity);
        showQuestion(activity);
        showBaseTable(activity)
        var svg = showBaseChart(activity);
        if (activity.currentQuestion === 0) { //first question shown after hitting start button
            setLtiHeight(); //we have the full height of the app, so send to Canvas LTI
        }
        initInterface(activity, svg);
    }
    else {
        showFinalScore(activity);
    }
}

function showBaseTable(activity) {
    $('.table-y-axis').html(activity.questions[activity.currentQuestion].yAxisTitle);
    $('.table-x-axis').html(activity.questions[activity.currentQuestion].xAxisTitle);
    $xAxisTableValues.html('');
    $yAxisTableValues.html('');
}

function showBaseChart(activity) {
    $chart.html("");

    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom")
        .tickValues(getCurrentQuestion(activity).ticksX);


        //.tickFormat(formatxAxis);
        //.ticks(4);

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left")
        .tickValues(getCurrentQuestion(activity).ticksY);
        //.ticks(4);

    if (getCurrentQuestion(activity).axisFormat === 'whole') {
        xAxis.tickFormat(formatAxisWhole);
        yAxis.tickFormat(formatAxisWhole);
    }
    else {
        xAxis.tickFormat(formatAxisOneDecimal);
        yAxis.tickFormat(formatAxisOneDecimal);
    }

    var svg = d3.select(".chart").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .attr('class', 'base-chart')
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    svg.append("rect")
        .attr("width", width)
        .attr("height", height)
        .attr("id", "chart-background");

    var currentQuestion = activity.questions[activity.currentQuestion],
        xAxisLow = currentQuestion.xAxisLow,
        xAxisHigh = currentQuestion.xAxisHigh,
        xAxisTitle = currentQuestion.xAxisTitle,
        yAxisLow = currentQuestion.yAxisLow,
        yAxisHigh = currentQuestion.yAxisHigh,
        yAxisTitle = currentQuestion.yAxisTitle;

    x.domain([xAxisLow, xAxisHigh]);
    y.domain([yAxisLow, yAxisHigh]);

      svg.append("g")
          .attr("class", "x axis")
          .attr("transform", "translate(0," + height + ")")
          .call(xAxis)
          .append("text")
          .attr("text-anchor", "middle")
          .attr("transform", "translate(" + (width / 2) + " ," + (margin.bottom - margin.top) + ")")
          .attr("class", "title")
          .text(xAxisTitle);

      svg.append("g")
          .attr("class", "y axis")
          .call(yAxis)
          .append("text")
          .attr("text-anchor", "middle")
          .attr("transform", "translate(-45," + (height / 2) + ") rotate(-90)")
          .attr("class", "title")
          .text(yAxisTitle);

    //grid lines: http://bl.ocks.org/d3noob/e1aa61856118edfa624d
    // Draw the x Grid lines
    svg.append("g")
        .attr("class", "grid")
        .attr("transform", "translate(0," + height + ")")
        .call(make_x_grid(x, activity)
            .tickSize(-height, 0, 0)
            .tickFormat("")
        )

    // Draw the y Grid lines
    svg.append("g")
        .attr("class", "grid")
        .call(make_y_grid(y, activity)
            .tickSize(-width, 0, 0)
            .tickFormat("")
        )

    return svg;
}

//grid lines: http://bl.ocks.org/d3noob/e1aa61856118edfa624d
// function for the x grid lines
function make_x_grid(x, activity) {
    return d3.svg.axis()
        .scale(x)
        .orient("bottom")
        .tickValues(getCurrentQuestion(activity).ticksX);
        //.ticks(4)
}

// function for the y grid lines
function make_y_grid(y, activity) {
  return d3.svg.axis()
      .scale(y)
      .orient("left")
      .tickValues(getCurrentQuestion(activity).ticksY);
      //.ticks(4)
}

function initInterface(activity, svg) {
    markActiveInterface(activity);
    if (activity.questions[activity.currentQuestion].interface === "scatterplot") {
        initScatterPlot(activity, svg);
    }
    else { //data entry
        initDataEntry(activity, svg);
    }
}

function markActiveInterface(activity) {
    if (activity.questions[activity.currentQuestion].interface === "scatterplot") {
        $table.removeClass('active');
        $table.addClass('inactive');
        $table.off();
        $('.entry-instructions').html('<em>Enter values by clicking on the chart. You can remove a point by clicking on it.</em>');
    }
    else { //data entry
        $table.addClass('active');
        $table.removeClass('inactive');
        $('#chart-background').attr('class', 'inactive');
        $('svg', $chart).off();
        $('.entry-instructions').html('<em>Enter values in the table on the right. An X will appear next to the row until you have entered valid coordinates (you need to include both an X and a Y value, and to enter values that are within range).</em>');
    }
}

function initDataEntry(activity, svg) {
    $.each($yAxisTableValues, function(index) {
        var inputHtml = '<input type="text" size="10" class="data-entry input-y-axis-' + index + 1 + '"/>';
        $(this).html(inputHtml);
    });
    $.each($xAxisTableValues, function(index) {
        var inputHtml = '<input type="text" size="10" class="data-entry input-x-axis-' + index + 1 + '"/>';
        $(this).html(inputHtml);
    });

    var timeoutId;
    $('input').on('input', function() {
        //reset validation in UI and timeout
        var $row = $(this).parents('tr');
        $('td', $row).removeClass('invalid');
        $('.fa', $row).remove();
        if (timeoutId) {
            window.clearTimeout(timeoutId);
        }
        //get axis name and point number
        var parentClass = $(this).parent().attr('class');
        var axisName = parentClass.split('-axis-')[0]; //i.e. x-axis-1
        var pointNumber = parentClass.split('-axis-')[1];
        var rowValues = getTableRowValues(activity, axisName, pointNumber, $(this));
        var xValue = rowValues.x,
            yValue = rowValues.y;
        timeoutId = window.setTimeout(function() { //wait .5 seconds in case they're mid-typing
            if (validateTableEntry(activity, xValue, yValue)) {
                var currentPointValue = doesPointExist(activity, pointNumber);
                if (currentPointValue) { //if a pre-existing value, update it
                    currentPointValue.x = xValue;
                    currentPointValue.y = yValue;
                    updatePoint(activity, pointNumber, xValue, yValue, svg);
                }
                else if (activity.numDataPoints !== maxDataPoints) { //otherwise, add a new point
                    addNewPointFromTable(activity, xValue, yValue, svg)
                }
            }
            else {
                $('td', $row).addClass('invalid');
                $('td:first-child', $row).append('<span class="fa fa-remove fa-2x" data-toggle="popover" data-placement="bottom" title="Invalid coordinate" data-content="The value you entered is not a valid coordinate, or it is out of the range for the chart." data-trigger="hover"></span>');
                //$('[data-toggle="tooltip"]').tooltip();
                $('[data-toggle="popover"]').popover();
            }
        }, 500);
    });
}

function getTableRowValues(activity, axisName, pointNumber, thisValue) {
    var results = {};
    if (axisName === 'x') {
        results.x = thisValue.val();
        results.y = $('.y-axis-' + pointNumber + ' input').val();
    }
    else {
        results.y = thisValue.val();
        results.x = $('.x-axis-' + pointNumber + ' input').val();
    }
    return results;
}

function validateTableEntry(activity, xValue, yValue) {
    var currentQuestion = getCurrentQuestion(activity);
    var result = false;
    if (xValue.length > 0 && yValue.length > 0) { //are both x and y values present?
        if (!isNaN(xValue) || !isNaN(yValue)) { //are they both legal numbers?
            if (xValue <= currentQuestion.xAxisHigh
                && xValue >= currentQuestion.xAxisLow
                && yValue <= currentQuestion.yAxisHigh
                && yValue >= currentQuestion.yAxisLow) { //are they both within range?
                    result = true;
            }
        }
    }
    return result;
}

/* just in the data entry portion, we do a separate check to see if it's in range, and snap to grid if not */
function validateRange(activity, xValue, yValue) {

}

/* in the data entry portion, if a value is outside the range, then snap it to an appropriate one */
function snapToGrid(activity, xValue, yValue) {

}

function doesPointExist(activity, pointNumber) {
    var result;
    activity.dataPoints.forEach(function(dataPoint) {
        if (dataPoint.number == pointNumber) {
            result = dataPoint;
            return;
        }
    });
    return result; //cannot return within forEach loop, it returns undefined
}

//if it's within 2 of the value, we're considering it identical
//the mouse click value is much more sensitive than the CSS pointer cursor
function isPointIdentical(activity, xValue, yValue) {
    var identicalResult = false;
    //compare the values on the chart itself so that the points don't overlap
    activity.dataPoints.forEach(function(dataPoint) {
        if (dataPoint.x !== null || dataPoint.y !== null) { //ignore deleted points
            if (x(dataPoint.x) <= x(xValue + 2)
                && x(dataPoint.x) >= x(xValue - 2)
                && y(dataPoint.y) <= y(yValue + 2)
                && y(dataPoint.y) >= y(yValue - 2)) {
                identicalResult = true;
            }
        }
    });
    return identicalResult; //cannot return out of forEach loop
}

function updatePoint(activity, pointNumber, xValue, yValue, svg) {
    d3.select('.dot[data-number="' + pointNumber + '"]')
        .attr("transform", "translate(" + x(xValue) + "," + y(yValue) + ")");
    if (activity.numDataPoints === maxDataPoints && !isNaN(activity.currentAnswer)) {
        $submit.removeClass('button-inactive');
    }
    addRegression(activity, svg);
}

function deletePoint(activity, pointNumber, svg) {
    $('.dot[data-number="' + pointNumber + '"]').remove();
    activity.numDataPoints--;
}

function initScatterPlot(activity, svg) {
    $('svg', $chart).click(function(e) {
        var offset = $(this).offset();
        var relX = e.pageX - offset.left - margin.left;
        var relY = e.pageY - offset.top - margin.top;
        var newX = x.invert(relX);
        var newY = y.invert(relY);
        if (validateNewPoint(activity, newX, newY)) {
            addNewPointFromChart(activity, newX, newY, svg);
            handleDotClick(activity, svg); //re-initialize click handler for new dots
        }
    });
}

function drawPoint(newX, newY, svg, pointNumber) {
    svg.append("circle")
        .attr("transform", "translate(" + x(newX) + "," + y(newY) + ")")
        .attr("r", "7")
        .attr("class", "dot")
        .attr("data-number", pointNumber)
        .style("cursor", "pointer");
}

function addNewPointFromChart(activity, newX, newY, svg) {
    activity.numDataPoints++;
    /* look for points that the user deleted by clicking on them and fill those in first before new ones */
    var isDeletedPoint = false;
    activity.dataPoints.forEach(function(dataPoint, index) {
        if (dataPoint.x === null && dataPoint.y === null && isDeletedPoint === false) { //first deleted point
            dataPoint.x = newX; //let's fill this deleted point back in
            dataPoint.y = newY;
            drawPoint(newX, newY, svg, index + 1);
            addPointToTableValue(index + 1, newX, newY);
            isDeletedPoint = true;
        }
    });
    if (isDeletedPoint === false) {
        activity.dataPoints.push({'x': newX, 'y': newY, 'number': activity.numDataPoints});
        drawPoint(newX, newY, svg, activity.numDataPoints);
        addPointToTableValue(activity.numDataPoints, newX, newY);
    }

    addRegression(activity, svg);
    if (activity.numDataPoints === maxDataPoints && !isNaN(activity.currentAnswer)) {
        $submit.removeClass('button-inactive');
    }
}

function addNewPointFromTable(activity, newX, newY, svg) {
    activity.numDataPoints++;
    drawPoint(newX, newY, svg, activity.numDataPoints);
    activity.dataPoints.push({'x': newX, 'y': newY, 'number': activity.numDataPoints});
    addRegression(activity, svg);
    if (activity.numDataPoints === maxDataPoints && !isNaN(activity.currentAnswer)) {
        $submit.removeClass('button-inactive');
    }
}

function validateNewPoint(activity, newX, newY) {
    var currentQuestion = activity.questions[activity.currentQuestion];
    if (newX <= currentQuestion.xAxisHigh
        && newX >= currentQuestion.xAxisLow
        && newY <= currentQuestion.yAxisHigh
        && newY >= currentQuestion.yAxisLow
        && activity.numDataPoints < maxDataPoints
        && !isPointIdentical(activity, newX, newY)) {
        return true;
    }
    else {
        return false;
    }
}


function addPointToTableValue(pointNumber, xValue, yValue) {
    $('.x-axis-' + pointNumber).html(xValue.toFixed(2));
    $('.y-axis-' + pointNumber).html(yValue.toFixed(2));
}

function addRegression(activity, svg) {
    if (activity.numDataPoints >= 3) {
        d3.selectAll('.trendline').remove();
        //trendline source: http://bl.ocks.org/benvandyke/8459843
        var xSeries = [],
            ySeries = [];
        activity.dataPoints.forEach(function(datapoint) {
            if (datapoint.x !== null && datapoint.y !== null) { //step over deleted points
                xSeries.push(parseFloat(datapoint.x));
                ySeries.push(parseFloat(datapoint.y));
            }
        });
        var leastSquaresCoeff = leastSquares(xSeries, ySeries);
        // apply the reults of the least squares regression
		var x1 = activity.questions[activity.currentQuestion].xAxisLow;
        var y1 = x1 * leastSquaresCoeff.slope + leastSquaresCoeff.intercept;
		var x2 = activity.questions[activity.currentQuestion].xAxisHigh;
        var y2 = x2 * leastSquaresCoeff.slope + leastSquaresCoeff.intercept;
		var trendData = [[x1,y1,x2,y2]];

		var trendline = svg.selectAll(".trendline")
			.data(trendData);

		trendline.enter()
			.append("line")
			.attr("class", "trendline")
			.attr("x1", function(d) { return x(d[0]); })
			.attr("y1", function(d) { return y(d[1]); })
			.attr("x2", function(d) { return x(d[2]); })
			.attr("y2", function(d) { return y(d[3]); })
			.attr("stroke", "red")
			.attr("stroke-width", 1);

        if (leastSquaresCoeff.slope < 0) {
            leastSquaresCoeff.rSquare *= -1;
        }
        $('.correlation').html('r = ' + leastSquaresCoeff.rSquare.toFixed(2));
        activity.currentAnswer = leastSquaresCoeff.rSquare.toFixed(2);
    }
    else { //make sure that the trendline and r value are removed when points are cleared and become < 3
        d3.selectAll('.trendline').remove();
        $('.correlation').html('');
    }
}

//trendline source: http://bl.ocks.org/benvandyke/8459843
//returns slope, intercept and r-square of the line
function leastSquares(xSeries, ySeries) {
    var reduceSumFunc = function(prev, cur) { return prev + cur; };

    var xBar = xSeries.reduce(reduceSumFunc) * 1.0 / xSeries.length;
    var yBar = ySeries.reduce(reduceSumFunc) * 1.0 / ySeries.length;

    var ssXX = xSeries.map(function(d) { return Math.pow(d - xBar, 2); })
        .reduce(reduceSumFunc);

    var ssYY = ySeries.map(function(d) { return Math.pow(d - yBar, 2); })
        .reduce(reduceSumFunc);

    var ssXY = xSeries.map(function(d, i) { return (d - xBar) * (ySeries[i] - yBar); })
        .reduce(reduceSumFunc);

    var slope = ssXY / ssXX;
    var intercept = yBar - (xBar * slope);
    var rSquare = Math.pow(ssXY, 2) / (ssXX * ssYY);

    var result = {};
    result.slope = slope;
    result.intercept = intercept;
    result.rSquare = rSquare;
    return result;
}

function cleanCurrentData(activity) {
    activity.correlation = 0;
    activity.numDataPoints = 0;
    activity.dataPoints = [];
    activity.currentAnswer = 0;
    d3.selectAll('.trendline').remove();
    d3.selectAll('.dot').remove();
    $('.correlation').html('');
    $submit.addClass('button-inactive');
    $submit.show();
    $resetData.show();
    $('input').val('');
}

function handleDotClick(activity, svg) {
    //re-initialize click handler after each new point is added, to pick up on new points
    $('.dot').off();
    $('.dot').click(function(event) {
        event.stopPropagation();
        var pointNumber = $(this).data('number');
        var savedPoint = activity.dataPoints[pointNumber - 1]; //0-indexed
        savedPoint.x = null;
        savedPoint.y = null;
        deletePoint(activity, pointNumber, svg);
        //delete table values for this point
        $('.x-axis-' + pointNumber).html('');
        $('.y-axis-' + pointNumber).html('');
        //re-calculate regression
        addRegression(activity, svg);
        //gray out the submit button again if we were at the max and now are below it
        if (activity.numDataPoints < maxDataPoints) {
            $submit.addClass('button-inactive');
        }
    });
}

function handleResetData(activity) {
    $resetData.click(function() {
        var currentQuestion = getCurrentQuestion(activity);
        cleanCurrentData(activity);
        if (currentQuestion.interface === 'scatterplot') {
            showBaseTable(activity);
        }
    });
}

function handleSubmit(activity) {
    $submit.click(function() {
        if (activity.numDataPoints === maxDataPoints) {
            $submit.hide();
            $resetData.hide();
            $('.dot').off();
            $('#chart-background').attr('class', 'inactive');
            $table.addClass('inactive');
            var currentQuestion = activity.questions[activity.currentQuestion];
            var lowRange = currentQuestion.answerRangeLow;
            var highRange = currentQuestion.answerRangeHigh;
            var correlation = currentQuestion.correlation;
            var isCorrect = 0;
            if (activity.currentAnswer >= lowRange && activity.currentAnswer <= highRange) {
                correctFeedback(activity);
                isCorrect = 1;
            }
            else if (activity.currentAnswer > highRange) {
                tooBigFeedback(activity, correlation)
            }
            else if (activity.currentAnswer < lowRange) {
                tooSmallFeedback(activity, correlation)
            }
            /*if (correlation.indexOf('positive') !== -1) { //positive correlation for correct answer
                if (activity.currentAnswer >= lowRange && activity.currentAnswer <= highRange) {
                    correctFeedback(activity);
                }
                else if (activity.currentAnswer > highRange) {
                    tooBigFeedback(activity, correlation)
                }
                else if (activity.currentAnswer < lowRange) {
                    tooSmallFeedback(activity, correlation)
                }
            }
            else { //negative correlation for correct answer
                if (activity.currentAnswer >= lowRange && activity.currentAnswer <= highRange) {
                    correctFeedback(activity);
                }
                else if (activity.currentAnswer < highRange) {
                    tooBigFeedback(activity, correlation);
                }
                else if (activity.currentAnswer > lowRange) {
                    tooSmallFeedback(activity, correlation)
                }
            }
            */

            //$feedback.css('visibility', 'visible');
            $feedback.css('display', 'block');
            //$continue.css('display', 'block');
            $continue.removeClass('button-inactive');

            //API datatracking
            customActivityData.apiInsertResponse({
                'question': currentQuestion.question,
                'answer': activity.currentAnswer,
                'answer_key': currentQuestion.answerRangeLow + ' to ' + currentQuestion.answerRangeHigh,
                'is_correct': isCorrect
            });

            customActivityData.apiUpdateAttempt({
                'last_milestone': 'question phase',
                'count_correct': activity.currentScore,
                'count_incorrect': activity.currentIncorrect,
                'calculated_score': activity.currentScore / activity.totalPoints,
                'complete': '0'
            });

            $continue.click(function() {
                $continue.off();
                nextQuestion(activity);
            });
        }
    });
}

function correctFeedback(activity) {
    $feedback.html('Correct! Click next to continue.');
    activity.currentScore++;
    $score.html('Score: ' + activity.currentScore + '/' + activity.totalPoints);
}

function tooSmallFeedback(activity, correlation) {
    $feedback.html('Incorrect: r-value of simulated data (r=' + activity.currentAnswer +
                    ') is too small for a ' + correlation + ' correlation. Click next to continue.');
    activity.currentIncorrect++;
}

function tooBigFeedback(activity, correlation) {
    $feedback.html('Incorrect: r-value of simulated data (r=' + activity.currentAnswer +
                    ') is too big for a ' + correlation + ' correlation. Click next to continue.');
    activity.currentIncorrect++;
}

/*function wrongSignFeedback(activity, correlation) {
    $feedback.html('Incorrect: r-value of simulated data (r=' + activity.currentAnswer +
                    ') is the wrong direction for a ' + correlation + ' correlation. Click here to continue.');
    activity.currentIncorrect++;
}*/

function showFinalScore(activity) {
    customActivityData.apiUpdateAttempt({
        'last_milestone': 'complete',
        'count_correct': activity.currentScore,
        'count_incorrect': activity.currentIncorrect,
        'calculated_score': activity.currentScore / activity.totalPoints,
        'complete': '1',
    }, function() {
        showFinalGrade(activity); //callback
    });
}

function showFinalGrade(activity) {
    var finalScoreHtml = "<div class='final-score'>" +
                    "<h1>Activity complete.</h1>" +
                    "<h2>Final score: " + activity.currentScore + "/" + activity.totalPoints + "</h2>" +
                 "</div>";
    $('body').html('');
    $('body').append(finalScoreHtml);
}