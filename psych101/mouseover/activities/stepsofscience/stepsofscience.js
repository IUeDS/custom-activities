var step1 = new MouseoverPair({'title': 'step1'});

var step2 = new MouseoverPair({'title': 'step2'});

var step3 = new MouseoverPair({'title': 'step3'});

var step4 = new MouseoverPair({'title': 'step4'});

var step5 = new MouseoverPair({'title': 'step5'});

var step6 = new MouseoverPair({'title': 'step6'});

var mouseoverPairs = [step1, step2, step3, step4, step5, step6];
//var text = 'text.html';
var text ='text.html';

var activity = new Mouseover({'imageFile': 'stepsofscience.svg',//'stepsofscience.svg',
                              'imageWidth': '400',
                              'imageHeight': '335',
                              'instructions': ' ',
                              'text': text,
                              'mouseoverPairs': mouseoverPairs});

activity.init(activity);