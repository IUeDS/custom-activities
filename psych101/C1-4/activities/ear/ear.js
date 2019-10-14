var cochleaAnswer = new Answer({
            'name': 'Cochlea',
            'label_x': '470',
            'label_y': '335',
            'label_height': '18',
            'label_width': '53',
            'image_x': '430',
            'image_y': '180',
            'image_height': '85',
            'image_width': '70'
        });
var earDrumAnswer = new Answer({
            'name': 'Eardrum',
            'label_x': '242',
            'label_y': '237',
            'label_height': '17',
            'label_width': '52',
            'image_x': '322',
            'image_y': '190',
            'image_height': '50',
            'image_width': '30'
        });
var ossiclesAnswer = new Answer({
            'name': 'Ossicles',
            'label_x': '315',
            'label_y': '331',
            'label_height': '17',
            'label_width': '50',
            'image_x': '358',
            'image_y': '215',
            'image_height': '42',
            'image_width': '28'
        });
var ovalWindowAnswer = new Answer({
            'name': 'Oval Window',
            'label_x': '415',
            'label_y': '88',
            'label_height': '17',
            'label_width': '69',
            'image_x': '390',
            'image_y': '200',
            'image_height': '25',
            'image_width': '30'
        });

var q1 = new Question({
            'question_stem': 'The location where auditory vibrations are transduced into neural activity.',
            'answer': cochleaAnswer
        });
var q2 = new Question({
            'question_stem': 'The basilar membrane is a part of this structure.',
            'answer': cochleaAnswer
        });
var q3 = new Question({
            'question_stem': 'This is the first structure to vibrate when stimulated by sound waves.',
            'answer': earDrumAnswer
        });
var q4 = new Question({
            'question_stem': 'The anvil is part of this structure.',
            'answer': ossiclesAnswer
        });
var q5 = new Question({
            'question_stem': 'The location where the stirrup vibrates against the cochlea.',
            'answer': ovalWindowAnswer
        });
var q6 = new Question({
            'question_stem': 'When you change altitude, or go deep underwater, the change in air pressure may cause tension and discomfort in this membrane.',
            'answer': earDrumAnswer
        });
var q7 = new Question({
            'question_stem': 'Different parts of this structure respond to different sound frequencies.',
            'answer': cochleaAnswer
        });
var q8 = new Question({
            'question_stem': 'Another term for this structure is &ldquo;tympanic membrane.&rdquo;',
            'answer': earDrumAnswer
        });
var q9 = new Question({
            'question_stem': 'Some types of hearing loss are associated with decreased motion of the bones in this structure.',
            'answer': ossiclesAnswer
        });
var q10 = new Question({
            'question_stem': 'Vibrations on this membrane have been amplified by the bones in the middle ear.',
            'answer': ovalWindowAnswer
        });

var questions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
var answers = [cochleaAnswer, earDrumAnswer, ossiclesAnswer, ovalWindowAnswer];
var activity;

//group variable defined globally in data.js

if (group === "C1") {
    activity = new Activity({
            'questions': questions,
            'answers': answers,
            'questionType': 'c1',
            'imageWidth': 600,
            'imageHeight': 502,
            'svg': 'ear.svg'
        });
}
else if (group === "C2") {
    activity = new Activity({
            'questions': questions,
            'answers': answers,
            'questionType': 'c2',
            'imageWidth': 300,
            'imageHeight': 251,
            'svg': 'ear.svg'
        });  
}
else if (group === "C3") {
    activity = new Activity({
            'questions': questions,
            'answers': answers,
            'questionType': 'c3',
            'imageWidth': 600,
            'imageHeight': 502,
            'svg': 'ear.svg'
        });
}
else if (group === "C4") {
    activity = new Activity({
            'questions': questions,
            'answers': answers,
            'questionType': 'c4',
            'imageWidth': 300,
            'imageHeight': 251,
            'svg': 'ear.svg'
        });
}
else {
    $('body').append('<h1>An error occurred. Please contact your instructor.</h1>');
}
var params = {'activity': activity};
activity.init(params);