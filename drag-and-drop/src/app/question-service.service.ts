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
    }
  ];
}
