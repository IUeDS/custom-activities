var corneaAnswer = new Answer({
            'name': 'Cornea',
            'label_x': '50',
            'label_y': '301',
            'label_height': '20',
            'label_width': '40',
            'image_x': '72',
            'image_y': '160',
            'image_height': '145',
            'image_width': '40'
        });
var pupilAnswer = new Answer({
            'name': 'Pupil',
            'label_x': '35',
            'label_y': '250',
            'label_height': '20',
            'label_width': '32',
            'image_x': '120',
            'image_y': '203',
            'image_height': '60',
            'image_width': '10'
        });
var lensAnswer = new Answer({
            'name': 'Lens',
            'label_x': '155',
            'label_y': '392',
            'label_height': '20',
            'label_width': '45',
            'image_x': '138',
            'image_y': '170',
            'image_height': '120',
            'image_width': '28'
        });
var foveaAnswer = new Answer({
            'name': 'Fovea',
            'label_x': '488',
            'label_y': '270',
            'label_height': '17',
            'label_width': '40',
            'image_x': '440',
            'image_y': '225',
            'image_height': '80',
            'image_width': '30'
        });
var opticNerveAnswer = new Answer({
            'name': 'Optic Nerve',
            'label_x': '484',
            'label_y': '122',
            'label_height': '20',
            'label_width': '90',
            'image_x': '440',
            'image_y': '165',
            'image_height': '47',
            'image_width': '80'
        });

var q1 = new Question({
            'question_stem': 'The part of the retina that has the highest visual acuity.',
            'answer': foveaAnswer
        });
var q2 = new Question({
            'question_stem': 'When you walk from sunlight into a dark room, this part of your eye will become enlarged.',
            'answer': pupilAnswer
        });
var q3 = new Question({
            'question_stem': 'To see nearby objects, this part of the eye needs to become thickened.',
            'answer': lensAnswer
        });
var q4 = new Question({
            'question_stem': 'The location where light is transduced into neural signals.',
            'answer': foveaAnswer
        });
var q5 = new Question({
            'question_stem': 'People have a blind spot where this pathway connects to the retina.',
            'answer': opticNerveAnswer
        });
var q6 = new Question({
            'question_stem': 'Accommodation occurs here.',
            'answer': lensAnswer
        });
var q7 = new Question({
            'question_stem': 'The protective covering of the eye.',
            'answer': corneaAnswer
        });
var q8 = new Question({
            'question_stem': 'The location that has a large concentration of cones.',
            'answer': foveaAnswer
        });
var q9 = new Question({
            'question_stem': 'When someone has cataracts, this part of the eye will become clouded.',
            'answer': lensAnswer
        });
var q10 = new Question({
            'question_stem': 'When the iris enlarges, this part of your eye will become smaller.',
            'answer': pupilAnswer
        });

var questions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
var answers = [corneaAnswer, pupilAnswer, lensAnswer, foveaAnswer, opticNerveAnswer];
var activity;

//group variable defined globally in framework.js

if (group === "C1") {
    activity = new Activity({
            'questions': questions,
            'answers': answers,
            'questionType': 'c1',
            'imageWidth': 600,
            'imageHeight': 502,
            'svg': 'eye.svg'
        });
}
else if (group === "C2") {
    activity = new Activity({
            'questions': questions,
            'answers': answers,
            'questionType': 'c2',
            'imageWidth': 300,
            'imageHeight': 251,
            'svg': 'eye.svg'
        });  
}
else if (group === "C3") {
    activity = new Activity({
            'questions': questions,
            'answers': answers,
            'questionType': 'c3',
            'imageWidth': 600,
            'imageHeight': 502,
            'svg': 'eye.svg'
        });
}
else if (group === "C4") {
    activity = new Activity({
            'questions': questions,
            'answers': answers,
            'questionType': 'c4',
            'imageWidth': 300,
            'imageHeight': 251,
            'svg': 'eye.svg'
        });
}
else {
    $('body').append('<h1>An error occurred. Please contact your instructor.</h1>');
}
var params = {'activity': activity};
activity.init(params);