import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor() { }

  getQuestion(questionId) {
    for (let question of this.questions) {
      if (question.id == questionId) {
        return question;
      }
    }

    return null;
  }

  questions = [
    {
      id: 1,
      question_text: 'Draw the structure of ⍺-D-Glucopyranose.',
      options: [
        {id: 9, type: "IMAGE", count: 1, width: 278, height: 258, img_url: './assets/q1/q1-base.png', text: null, font_size: null, left: null, top: null, answer_id: null },
        {id: 1, type: "DRAGGABLE", count: 1, width: 48, height: 100, img_url: './assets/q1/q1-option1.png', text: null, font_size: null, left: null, top: null, answer_id: null },
        {id: 2, type: "DRAGGABLE", count: 3, width: 46, height: 100, img_url: './assets/q1/q1-option2.png', text: null, font_size: null, left: null, top: null, answer_id: null },
        {id: 5, type: "DRAGGABLE", count: 1, width: 143, height: 100, img_url: './assets/q1/q1-option3-resized2.png', text: null, font_size: null, left: null, top: null, answer_id: null },
        {id: 3, type: "DROPPABLE", count: 1, width: 80, height: 120, img_url: null, text: null, font_size: null, left: 85, top: 35, answer_id: 5 },
        {id: 4, type: "DROPPABLE", count: 1, width: 80, height: 120, img_url: null, text: null, font_size: null, left: 20, top: 130, answer_id: 2 },
        {id: 6, type: "DROPPABLE", count: 1, width: 80, height: 120, img_url: null, text: null, font_size: null, left: 86, top: 238, answer_id: 1 }, 
        {id: 7, type: "DROPPABLE", count: 1, width: 80, height: 120, img_url: null, text: null, font_size: null, left: 213, top: 238, answer_id: 2 }, 
        {id: 8, type: "DROPPABLE", count: 1, width: 80, height: 120, img_url: null, text: null, font_size: null, left: 275, top: 133, answer_id: 2 }
      ]
    },
    {
      id: 2,
      question_text: 'Label the carbons from 1 to 6 in correct order.',
      options: [
        //{id: 10, type: "IMAGE", count: 1, width: 278, height: 258, img_url: './assets/q2/q2-base.png', text: null, font_size: null, left: null, top: null, answer_id: null },
        {id: 10, type: "IMAGE", count: 1, width: 300, height: 400, img_url: './assets/q2/q2-base.png', text: null, font_size: null, left: null, top: null, answer_id: null },
        {id: 11, type: "DRAGGABLE", count: 1, width: null, height: null, img_url: null, text: '1', font_size: '32px', left: null, top: null, answer_id: null },
        {id: 12, type: "DRAGGABLE", count: 1, width: null, height: null, img_url: null, text: '2', font_size: '32px', left: null, top: null, answer_id: null },
        {id: 13, type: "DRAGGABLE", count: 1, width: null, height: null, img_url: null, text: '3', font_size: '32px', left: null, top: null, answer_id: null },
        {id: 14, type: "DRAGGABLE", count: 1, width: null, height: null, img_url: null, text: '4', font_size: '32px', left: null, top: null, answer_id: null },
        {id: 15, type: "DRAGGABLE", count: 1, width: null, height: null, img_url: null, text: '5', font_size: '32px', left: null, top: null, answer_id: null },
        {id: 16, type: "DRAGGABLE", count: 1, width: null, height: null, img_url: null, text: '6', font_size: '32px', left: null, top: null, answer_id: null },
        {id: 17, type: "DROPPABLE", count: 1, width: 30, height: 40, img_url: null, text: null, font_size: null, left: 70, top: 50, answer_id: 16 },
        {id: 18, type: "DROPPABLE", count: 1, width: 30, height: 40, img_url: null, text: null, font_size: null, left: 35, top: 165, answer_id: 15 },
        {id: 19, type: "DROPPABLE", count: 1, width: 30, height: 40, img_url: null, text: null, font_size: null, left: -15, top: 265, answer_id: 14 },
        {id: 20, type: "DROPPABLE", count: 1, width: 30, height: 40, img_url: null, text: null, font_size: null, left: 70, top: 425, answer_id: 13 },
        {id: 21, type: "DROPPABLE", count: 1, width: 30, height: 40, img_url: null, text: null, font_size: null, left: 235, top: 425, answer_id: 12 },
        {id: 22, type: "DROPPABLE", count: 1, width: 30, height: 40, img_url: null, text: null, font_size: null, left: 310, top: 265, answer_id: 11 },
      ]
    },
    {
      id: 3,
      question_text: 'Draw the more stable conformation of ⍺-D-Galactopyranose. ',
      options: [
        {id: 23, type: "IMAGE", count: 1, width: 332, height: 144, img_url: './assets/q3/q3-base.png', text: null, font_size: null, left: null, top: null, answer_id: null },
        {id: 24, type: "DRAGGABLE", count: 1, width: 68, height: 138, img_url: './assets/q3/q3-option1.png', text: null, font_size: null, left: null, top: null, answer_id: null },
        {id: 25, type: "DRAGGABLE", count: 1, width: 75, height: 138, img_url: './assets/q3/q3-option2.png', text: null, font_size: null, left: null, top: null, answer_id: null },
        {id: 26, type: "DRAGGABLE", count: 1, width: 115, height: 134, img_url: './assets/q3/q3-option3.png', text: null, font_size: null, left: null, top: null, answer_id: null },
        {id: 27, type: "DRAGGABLE", count: 1, width: 115, height: 134, img_url: './assets/q3/q3-option4.png', text: null, font_size: null, left: null, top: null, answer_id: null },
        {id: 28, type: "DRAGGABLE", count: 1, width: 240, height: 65, img_url: './assets/q3/q3-option5.png', text: null, font_size: null, left: null, top: null, answer_id: null },
        {id: 29, type: "DRAGGABLE", count: 1, width: 240, height: 72, img_url: './assets/q3/q3-option6.png', text: null, font_size: null, left: null, top: null, answer_id: null },
        {id: 30, type: "DRAGGABLE", count: 1, width: 166, height: 65, img_url: './assets/q3/q3-option7.png', text: null, font_size: null, left: null, top: null, answer_id: null },
        {id: 31, type: "DRAGGABLE", count: 1, width: 138, height: 135, img_url: './assets/q3/q3-option8.png', text: null, font_size: null, left: null, top: null, answer_id: null },
        {id: 32, type: "DROPPABLE", count: 1, width: 55, height: 120, img_url: null, text: null, font_size: null, left: 28, top: -35, answer_id: 24 },
        {id: 33, type: "DROPPABLE", count: 1, width: 150, height: 50, img_url: null, text: null, font_size: null, left: 9, top: 106, answer_id: 30 },
        {id: 34, type: "DROPPABLE", count: 1, width: 100, height: 120, img_url: null, text: null, font_size: null, left: 238, top: 147, answer_id: 27 },
        {id: 35, type: "DROPPABLE", count: 1, width: 55, height: 120, img_url: null, text: null, font_size: null, left: 330, top: 186, answer_id: 25 },
        {id: 36, type: "DROPPABLE", count: 1, width: 105, height: 120, img_url: null, text: null, font_size: null, left: 125, top: 4, answer_id: 31 }
      ]
    },
    {
      id: 4,
      question_text: 'Draw the structure of D-Glucose.',
      options: [
        {id: 37, type: "IMAGE", count: 1, width: 205, height: 565, img_url: './assets/q4/q4-base.png', text: null, font_size: null, left: null, top: null, answer_id: null },
        {id: 38, type: "DRAGGABLE", count: 4, width: 90, height: 64, img_url: './assets/q4/q4-option1.png', text: null, font_size: null, left: null, top: null, answer_id: null },
        {id: 39, type: "DRAGGABLE", count: 4, width: 64, height: 64, img_url: './assets/q4/q4-option2.png', text: null, font_size: null, left: null, top: null, answer_id: null },
        {id: 40, type: "DROPPABLE", count: 1, width: 50, height: 40, img_url: null, text: null, font_size: null, left: -10, top: 163, answer_id: 39 },
        {id: 41, type: "DROPPABLE", count: 1, width: 50, height: 40, img_url: null, text: null, font_size: null, left: -10, top: 258, answer_id: 38 },
        {id: 42, type: "DROPPABLE", count: 1, width: 50, height: 40, img_url: null, text: null, font_size: null, left: -10, top: 351, answer_id: 39 },
        {id: 43, type: "DROPPABLE", count: 1, width: 50, height: 40, img_url: null, text: null, font_size: null, left: -10, top: 445, answer_id: 39 },
        {id: 44, type: "DROPPABLE", count: 1, width: 50, height: 40, img_url: null, text: null, font_size: null, left: 225, top: 163, answer_id: 38 },
        {id: 45, type: "DROPPABLE", count: 1, width: 50, height: 40, img_url: null, text: null, font_size: null, left: 225, top: 258, answer_id: 39 },
        {id: 46, type: "DROPPABLE", count: 1, width: 50, height: 40, img_url: null, text: null, font_size: null, left: 225, top: 351, answer_id: 38 },
        {id: 47, type: "DROPPABLE", count: 1, width: 50, height: 40, img_url: null, text: null, font_size: null, left: 225, top: 445, answer_id: 38 }
      ]
    },
    {
      id: 5,
      question_text: 'Draw the structure of Methionine.',
      options: [
        {id: 48, type: "IMAGE", count: 1, width: 315, height: 500, img_url: './assets/q5/q5-base.png', text: null, font_size: null, left: null, top: null, answer_id: null },
        {id: 49, type: "DRAGGABLE", count: 1, width: 60, height: 43, img_url: './assets/q5/q5-option1.png', text: null, font_size: null, left: null, top: null, answer_id: null },
        {id: 50, type: "DRAGGABLE", count: 1, width: 43, height: 43, img_url: './assets/q5/q5-option2.png', text: null, font_size: null, left: null, top: null, answer_id: null },
        {id: 51, type: "DRAGGABLE", count: 2, width: 68, height: 41, img_url: './assets/q5/q5-option3.png', text: null, font_size: null, left: null, top: null, answer_id: null },
        {id: 52, type: "DRAGGABLE", count: 1, width: 85, height: 39, img_url: './assets/q5/q5-option4.png', text: null, font_size: null, left: null, top: null, answer_id: null },
        {id: 53, type: "DRAGGABLE", count: 1, width: 43, height: 39, img_url: './assets/q5/q5-option5.png', text: null, font_size: null, left: null, top: null, answer_id: null },
        {id: 54, type: "DROPPABLE", count: 1, width: 30, height: 30, img_url: null, text: null, font_size: null, left: 157, top: 15, answer_id: 52 },
        {id: 55, type: "DROPPABLE", count: 1, width: 30, height: 30, img_url: null, text: null, font_size: null, left: 157, top: 120, answer_id: 53 },
        {id: 56, type: "DROPPABLE", count: 1, width: 30, height: 30, img_url: null, text: null, font_size: null, left: 157, top: 220, answer_id: 51 },
        {id: 57, type: "DROPPABLE", count: 1, width: 30, height: 30, img_url: null, text: null, font_size: null, left: 157, top: 320, answer_id: 51 },
      ]
    }
  ];
}
