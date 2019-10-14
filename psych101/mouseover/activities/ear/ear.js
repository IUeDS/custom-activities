var step1 = new MouseoverPair({'title': 'step1'});

var step2 = new MouseoverPair({'title': 'step2'});

var step3 = new MouseoverPair({'title': 'step3'});

var step4 = new MouseoverPair({'title': 'step4'});

var mouseoverPairs = [step1, step2, step3, step4];
var text ='text.html';

var activity = new Mouseover({'imageFile': 'ear.svg',
                              'imageWidth': '400',
                              'imageHeight': '335',
                              'instructions': 'Hover over the numbered steps to highlight the relevant parts of the ear. Hover over the diagram to highlight the relevant part of the numbered steps.',
                              'text': text,
                              'mouseoverPairs': mouseoverPairs});

activity.init(activity);