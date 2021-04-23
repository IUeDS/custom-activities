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
        {id: 9, type: "IMAGE", count: 1, width: 278, height: 258, imgUrl: './assets/q1-base.png', left: null, top: null, answer_id: null },
        {id: 1, type: "DRAGGABLE", count: 1, width: 48, height: 100, imgUrl: './assets/q1-option1.png', left: null, top: null, answer_id: null },
        {id: 2, type: "DRAGGABLE", count: 3, width: 46, height: 100, imgUrl: './assets/q1-option2.png', left: null, top: null, answer_id: null },
        {id: 5, type: "DRAGGABLE", count: 1, width: 143, height: 100, imgUrl: './assets/q1-option3-resized2.png', left: null, top: null, answer_id: null },
        {id: 3, type: "DROPPABLE", count: 1, width: 80, height: 120, imgUrl: null, left: 85, top: 35, answer_id: 5 },
        {id: 4, type: "DROPPABLE", count: 1, width: 80, height: 120, imgUrl: null, left: 20, top: 130, answer_id: 2 },
        {id: 6, type: "DROPPABLE", count: 1, width: 80, height: 120, imgUrl: null, left: 86, top: 238, answer_id: 1 }, 
        {id: 7, type: "DROPPABLE", count: 1, width: 80, height: 120, imgUrl: null, left: 213, top: 238, answer_id: 2 }, 
        {id: 8, type: "DROPPABLE", count: 1, width: 80, height: 120, imgUrl: null, left: 275, top: 133, answer_id: 2 }
      ]
    }
  ];
}
