var positiveReinforcementAnswer = new Answer({
            'name': 'Positive Reinforcement',
            'label_x': '-1000',
            'label_y': '-1000',
            'label_height': '0',
            'label_width': '0',
            'image_x': '262',
            'image_y': '100',
            'image_height': '35',
            'image_width': '222'
        });
var negativeReinforcementAnswer = new Answer({
            'name': 'Negative Reinforcement',
            'label_x': '-1000',
            'label_y': '-1000',
            'label_height': '0',
            'label_width': '0',
            'image_x': '262',
            'image_y': '58',
            'image_height': '35',
            'image_width': '222'
        });
var positivePunishmentAnswer = new Answer({
            'name': 'Positive Punishment',
            'label_x': '-1000',
            'label_y': '-1000',
            'label_height': '0',
            'label_width': '0',
            'image_x': '492',
            'image_y': '100',
            'image_height': '35',
            'image_width': '222'
        });
var negativePunishmentAnswer = new Answer({
            'name': 'Negative Punishment',
            'label_x': '-1000',
            'label_y': '-1000',
            'label_height': '0',
            'label_width': '0',
            'image_x': '492',
            'image_y': '58',
            'image_height': '35',
            'image_width': '222'
        });

var q1 = new Question({
            'question_stem': 'Being given a reduced jail sentence for good behavior',
            'answer': negativeReinforcementAnswer
        });
var q2 = new Question({
            'question_stem': 'Because Marvin got bad grades, his mom took away his video games',
            'answer': negativePunishmentAnswer
        });
var q3 = new Question({
            'question_stem': 'If you help your mom do the dishes, you&#39;ll get a candy bar',
            'answer': positiveReinforcementAnswer
        });
var q4 = new Question({
            'question_stem': 'Bruno&#39;s girlfriend slaps him because he was hitting on another girl at the bar',
            'answer': positivePunishmentAnswer
        });
var q5 = new Question({
            'question_stem': 'If you press your snooze button, the annoying alarm clock will turn off',
            'answer': negativeReinforcementAnswer
        });
var q6 = new Question({
            'question_stem': 'If your roommate does the dishes, you leave her a friendly &#34;thank you&#34; note',
            'answer': positiveReinforcementAnswer
        });
var q7 = new Question({
            'question_stem': 'You forgot to pay the cable bill for the second straight month, and the cable company turns off your service',
            'answer': negativePunishmentAnswer
        });
var q8 = new Question({
            'question_stem': 'You get shocked by an electrified fence when trying to sneak onto a farm to go cow-tipping',
            'answer': positivePunishmentAnswer
        });
var q9 = new Question({
            'question_stem': 'You give your dog a treat for barking when you said &#34;speak!&#34;',
            'answer': positiveReinforcementAnswer
        });
var q10 = new Question({
            'question_stem': 'If you take some pain medicine, the headache will go away',
            'answer': negativeReinforcementAnswer
        });

var questions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
var answers = [positivePunishmentAnswer, positiveReinforcementAnswer, negativePunishmentAnswer, negativeReinforcementAnswer];
var activity;

//group variable defined globally in framework.js

if (group === "C1") {
    activity = new Activity({
            'questions': questions,
            'answers': answers,
            'questionType': 'c1',
            'imageWidth': 600,
            'imageHeight': 502,
            'svg': 'operant.svg'
        });
}
else if (group === "C2") {
    activity = new Activity({
            'questions': questions,
            'answers': answers,
            'questionType': 'c2',
            'imageWidth': 300,
            'imageHeight': 251,
            'svg': 'operant.svg'
        });  
}
else if (group === "C3") {
    activity = new Activity({
            'questions': questions,
            'answers': answers,
            'questionType': 'c3',
            'imageWidth': 600,
            'imageHeight': 502,
            'svg': 'operant.svg'
        });
}
else if (group === "C4") {
    activity = new Activity({
            'questions': questions,
            'answers': answers,
            'questionType': 'c4',
            'imageWidth': 300,
            'imageHeight': 251,
            'svg': 'operant.svg'
        });
}
else {
    $('body').append('<h1>An error occurred. Please contact your instructor.</h1>');
}
var params = {'activity': activity};
activity.init(params);