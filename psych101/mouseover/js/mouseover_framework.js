var group = null;

//global div names and handler variables
var wrapperDiv = 'wrapper',
    instructionsDiv = 'instructions',
    imageDiv = 'image',
    imageLayerDiv = 'image-layer',
    textDiv = 'text',
    hoverableDiv = 'hoverable',
    hoverableTextDiv = 'hoverable-text',
    hoverableSVGDiv = 'hoverable-SVG',
    hoverableLabelDiv = 'hoverable-label';

var $wrapper = $('.' + wrapperDiv), //already on page
    $instructions,
    $image,
    $imageLayer,
    $text,
    $hoverText;

function Mouseover(params) {
    this.imageFile = params.imageFile;
    this.imagePath = this.imageFile;
    this.imageWidth = params.imageWidth;
    this.imageHeight = params.imageHeight;
    this.instructions = params.instructions;
    this.text = params.text;
    this.mouseoverPairs = params.mouseoverPairs;
    this.init = mouseoverInit;
}

function MouseoverPair(params) {
    this.title = params.title;
}

function mouseoverInit(activity) {
    createHtmlScaffolding();
    initHandlers();
    displayText(activity);
    displayImage(activity);
}

function createHtmlScaffolding() {
    $wrapper.append('<div class="' + instructionsDiv + '"></div>');
    $wrapper.append('<div class="' + textDiv + '"></div>');
    $wrapper.append('<div class="' + imageDiv + '"></div>');
    $wrapper.append('<div class="' + imageLayerDiv + '"></div>');
}

function initHandlers() {
    $instructions = $('.' + instructionsDiv);
    $image = $('.' + imageDiv);
    $imageLayer = $('.' + imageLayerDiv);
    $text = $('.' + textDiv);
}

function displayInstructions(instructionText) {
    $instructions.html(instructionText);
}

function displayImage(activity) {
    $image.load(activity.imagePath, function() {
        displayInstructions(activity.instructions);
        handleHoverEvent(activity);
    });
}

function displayText(activity) {
    $text.load(activity.text);
}

function handleHoverEvent(activity) {
    $hoverText = $('.' + hoverableTextDiv);


    //change to .on since text loaded asynchronously
    $('body').on('mouseover', '.' + hoverableDiv, function(e) {

        //===========================================================

        var theLabel = $(this).data('label');

        //find all spans with class .hoverable-text whose data-label matches this one
        var $hoveredText = $('.hoverable-text').filter(function() {
            return $(this).data('label') === theLabel;
        });

        //find SVG with the same data attribute
        var $hoveredSVG = $('.hoverable-SVG').filter(function() {
            return $(this).data('label') === theLabel;
        });

        //find labels with the same data attirbute
        var $hoveredLabels = $('.hoverable-label').filter(function() {
            return $(this).data('label') === theLabel;
        });

        $.each($hoveredText, function (i,el) {
            $(el).attr('class', 'hoverable hoverable-text hovered-text');
        });

        $.each($hoveredSVG, function (i,el) {
            $(el).attr('class', 'hoverable hoverable-SVG hovered-SVG');
        });

        $.each($hoveredLabels, function (i,el) {
            $(el).attr('class', 'hoverable hoverable-label hovered-label');
        });

    });

    //change to .on since text loaded asynchronously
    $('body').on('mouseout', '.hoverable', function(e) {
        var theLabel = $(this).data('label');

        //find all spans with class .hoverable-text whose data-label matches this one
        var $hoveredText = $('.hoverable-text').filter(function() {
            return $(this).data('label') === theLabel;
        });

        //find SVG with the same data attribute
        var $hoveredSVG = $('.hoverable-SVG').filter(function() {
            return $(this).data('label') === theLabel;
        });

        //find labels with the same data attirbute
        var $hoveredLabels = $('.hoverable-label').filter(function() {
            return $(this).data('label') === theLabel;
        });

        $.each($hoveredText, function (i,el) {
            $(el).attr('class', 'hoverable hoverable-text');
        });

        $.each($hoveredSVG, function (i,el) {
            $(el).attr('class', 'hoverable hoverable-SVG');
        });

        $.each($hoveredLabels, function (i,el) {
            $(el).attr('class', 'hoverable hoverable-label');
        });
    });

}