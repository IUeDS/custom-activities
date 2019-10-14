var sensoryMemoryAnswer = new Answer({
            'name': 'Sensory Memory',
            'label_x': '-1000',
            'label_y': '-1000',
            'label_height': '0',
            'label_width': '0',
            'image_x': '15',
            'image_y': '70',
            'image_height': '90',
            'image_width': '200'
        });
var shortTermMemoryAnswer = new Answer({
            'name': 'Short-Term Memory',
            'label_x': '-1000',
            'label_y': '-1000',
            'label_height': '0',
            'label_width': '0',
            'image_x': '270',
            'image_y': '70',
            'image_height': '90',
            'image_width': '200'
        });
var longTermMemoryAnswer = new Answer({
            'name': 'Long-Term Memory',
            'label_x': '-1000',
            'label_y': '-1000',
            'label_height': '0',
            'label_width': '0',
            'image_x': '525',
            'image_y': '70',
            'image_height': '90',
            'image_width': '200'
        });

var q1 = new Question({
            'question_stem': 'The primacy effect is due to information stored in this memory system.',
            'answer': longTermMemoryAnswer
        });
var q2 = new Question({
            'question_stem': 'This system only maintains information for about 1/3rd of a second.',
            'answer': sensoryMemoryAnswer
        });
var q3 = new Question({
            'question_stem': 'Chunking allows individuals to maintain more information in this memory system.',
            'answer': shortTermMemoryAnswer
        });
var q4 = new Question({
            'question_stem': 'Even though it&#39;s pitch-black, you can temporarily see everything in your bedroom for a fraction of a second after a lightning flash from the storm outside because of this memory system.',
            'answer': sensoryMemoryAnswer
        });
var q5 = new Question({
            'question_stem': 'Unless you actively rehearse it, information in this memory system will be lost.',
            'answer': shortTermMemoryAnswer
        });
var q6 = new Question({
            'question_stem': 'After his medial temporal lobes were removed, HM could not create new memories in this system.',
            'answer': longTermMemoryAnswer
        });
var q7 = new Question({
            'question_stem': 'You&#39;re not really paying attention to your mom, but when she says, &#34;You&#39;re not paying attention to me!&#34; you can still repeat the last few words she said because they&#39;re in this memory system.',
            'answer': sensoryMemoryAnswer
        });
var q8 = new Question({
            'question_stem': 'The recency effect is due to information stored in this memory system.',
            'answer': shortTermMemoryAnswer
        });
var q9 = new Question({
            'question_stem': 'Memories in this system might last 20-30 seconds.',
            'answer': shortTermMemoryAnswer
        });
var q10 = new Question({
            'question_stem': 'If it is repeatedly rehearsed, information might be transferred into this memory system.',
            'answer': longTermMemoryAnswer
        });

var questions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
var answers = [sensoryMemoryAnswer, shortTermMemoryAnswer, longTermMemoryAnswer];
var activity;

//group variable defined globally in framework.js

if (group === "C1") {
    activity = new Activity({
            'questions': questions,
            'answers': answers,
            'questionType': 'c1',
            'imageWidth': 600,
            'imageHeight': 502,
            'svg': 'multistore.svg'
        });
}
else if (group === "C2") {
    activity = new Activity({
            'questions': questions,
            'answers': answers,
            'questionType': 'c2',
            'imageWidth': 300,
            'imageHeight': 251,
            'svg': 'multistore.svg'
        });  
}
else if (group === "C3") {
    activity = new Activity({
            'questions': questions,
            'answers': answers,
            'questionType': 'c3',
            'imageWidth': 600,
            'imageHeight': 502,
            'svg': 'multistore.svg'
        });
}
else if (group === "C4") {
    activity = new Activity({
            'questions': questions,
            'answers': answers,
            'questionType': 'c4',
            'imageWidth': 300,
            'imageHeight': 251,
            'svg': 'multistore.svg'
        });
}
else {
    $('body').append('<h1>An error occurred. Please contact your instructor.</h1>');
}
var params = {'activity': activity};
activity.init(params);