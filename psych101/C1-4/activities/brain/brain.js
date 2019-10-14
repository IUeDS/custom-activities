var frontalLobeAnswer = new Answer({
            'name': 'Frontal Lobe',
            'label_x': '25',
            'label_y': '257',
            'label_height': '20',
            'label_width': '95',
            'image_x': '135',
            'image_y': '240',
            'image_height': '80',
            'image_width': '130'
        });
var parietalLobeAnswer = new Answer({
            'name': 'Parietal Lobe',
            'label_x': '445',
            'label_y': '304',
            'label_height': '20',
            'label_width': '95',
            'image_x': '300',
            'image_y': '255',
            'image_height': '65',
            'image_width': '120'
        });
var occipitalLobeAnswer = new Answer({
            'name': 'Occipital Lobe',
            'label_x': '490',
            'label_y': '213',
            'label_height': '20',
            'label_width': '105',
            'image_x': '430',
            'image_y': '165',
            'image_height': '100',
            'image_width': '28'
        });
var temporalLobeAnswer = new Answer({
            'name': 'Temporal Lobe',
            'label_x': '143',
            'label_y': '64',
            'label_height': '20',
            'label_width': '105',
            'image_x': '255',
            'image_y': '155',
            'image_height': '70',
            'image_width': '150'
        });
var cerebellumAnswer = new Answer({
            'name': 'Cerebellum',
            'label_x': '468',
            'label_y': '136',
            'label_height': '20',
            'label_width': '90',
            'image_x': '312',
            'image_y': '105',
            'image_height': '35',
            'image_width': '100'
        });

var q1 = new Question({
            'question_stem': 'This region allows you to balance while riding a bicycle.',
            'answer': cerebellumAnswer
        });
var q2 = new Question({
            'question_stem': 'This region is almost entirely dedicated to vision.',
            'answer': occipitalLobeAnswer
        });
var q3 = new Question({
            'question_stem': 'I have a larger portion of this lobe dedicated to perception of touch on my lips than my feet.',
            'answer': parietalLobeAnswer
        });
var q4 = new Question({
            'question_stem': 'I have practically no ability to act appropriately in social situations because I&#39;ve damaged this region.',
            'answer': frontalLobeAnswer
        });
var q5 = new Question({
            'question_stem': 'Primary auditory cortex is located in this region.',
            'answer': temporalLobeAnswer
        });
var q6 = new Question({
            'question_stem': 'The somatosensory homunculous is a part of this region.',
            'answer': parietalLobeAnswer
        });
var q7 = new Question({
            'question_stem': 'Parts of this lobe help us interpret the meaning of visual stimuli and recognize common objects.',
            'answer': temporalLobeAnswer
        });
var q8 = new Question({
            'question_stem': 'Primary motor cortex is located in this region.',
            'answer': frontalLobeAnswer
        });
var q9 = new Question({
            'question_stem': 'This is not a part of the forebrain.',
            'answer': cerebellumAnswer
        });
var q10 = new Question({
            'question_stem': 'This region is important for developing and acting on plans.',
            'answer': frontalLobeAnswer
        });

var questions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
var answers = [frontalLobeAnswer, parietalLobeAnswer, occipitalLobeAnswer, temporalLobeAnswer, cerebellumAnswer];
var activity;

//group variable defined globally in framework.js
if (group === "C1") {
    activity = new Activity({
            'questions': questions,
            'answers': answers,
            'questionType': 'c1',
            'imageWidth': 600,
            'imageHeight': 502,
            'svg': 'brain.svg'
        });
}
else if (group === "C2") {
    activity = new Activity({
            'questions': questions,
            'answers': answers,
            'questionType': 'c2',
            'imageWidth': 300,
            'imageHeight': 251,
            'svg': 'brain.svg'
        });  
}
else if (group === "C3") {
    activity = new Activity({
            'questions': questions,
            'answers': answers,
            'questionType': 'c3',
            'imageWidth': 600,
            'imageHeight': 502,
            'svg': 'brain.svg'
        });
}
else if (group === "C4") {
    activity = new Activity({
            'questions': questions,
            'answers': answers,
            'questionType': 'c4',
            'imageWidth': 300,
            'imageHeight': 251,
            'svg': 'brain.svg'
        });
}
else {
    //default to group C1 if group not present
    activity = new Activity({
            'questions': questions,
            'answers': answers,
            'questionType': 'c1',
            'imageWidth': 600,
            'imageHeight': 502,
            'svg': 'brain.svg'
        });
}
var params = {'activity': activity};
activity.init(params);