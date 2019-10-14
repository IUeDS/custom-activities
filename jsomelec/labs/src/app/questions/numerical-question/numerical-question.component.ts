import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lab-numerical-question',
  templateUrl: './numerical-question.component.html',
  styleUrls: ['./numerical-question.component.css']
})
export class NumericalQuestionComponent implements OnInit {

  	feedbackVisible : boolean = true; //show the "click submit" text right off the bat
	feedback : string = 'Click submit to tell me your results!';
	answer = {'studentAnswer': null, 'rangeOption': null};
	correctAnswer = null;
	isCorrect : boolean = false;
	retryCount: number = 0;
	correctAnswerRecorded : boolean = false; //don't update attempt once correct answer recorded
	incorrectAnswerRecorded : boolean = false; //only update attempt after 1st incorrect response
	@Input() question;
	@Output() responseSubmitted = new EventEmitter();

	ngOnInit() {}

	submitAnswer() {
		if (!this.answer.studentAnswer) {
			this.feedback = 'Please enter an answer.'
			this.showFeedback();
			return;
		}

		this.getRangeOption(); 

		if (!this.answer.rangeOption) {
			this.feedback = 'Answer not in range. Please try again.';
			this.showFeedback();
			return;
		}

		if (this.answer.studentAnswer) {
			this.feedback = this.answer.rangeOption.feedback;
			this.isCorrect = this.answer.rangeOption.correct;
			
			this.showFeedback();
			this.retryCount++;
			this.recordResponse();
		}
	}

	showFeedback() {
		this.feedbackVisible = false;
		//use timeout so "tada" animation class can be removed/added in the DOM with each click
		setTimeout(() => this.feedbackVisible = true, 0);
	}

	getRangeOption() {
		let studentAnswer = +(this.answer.studentAnswer);
		this.answer.rangeOption = null; //reset
		this.isCorrect = false; //reset
		this.question.options.forEach(option => {
			if (studentAnswer >= option.low && studentAnswer <= option.high) {
				this.answer.rangeOption = option;
				if (option.correct) {
					this.isCorrect = true;
				}
			}
		});
	}

	getCorrectAnswer() {
		this.question.options.forEach(option => {
			if (option.correct) {
				this.correctAnswer = option;
			}
		});
	}

	recordResponse() {
		let attemptUpdateRequired = false;
		let response = {};
		this.getCorrectAnswer();

		//here are the rules for updating the correct/incorrect count in the attempt: 
		//1) once the student answers the question correctly, don't increment the counts
		//2) only count the first incorrect response (so it's a count of incorrect questions, not responses)
		if (!this.correctAnswerRecorded) {
			if (this.isCorrect) {
				this.correctAnswerRecorded = true;
				attemptUpdateRequired = true;
			}
			else if (!this.incorrectAnswerRecorded) {
				this.incorrectAnswerRecorded = true;
				attemptUpdateRequired = true;
			}
		}

		//emit event to parent
		//response needs: is_correct, partial_credit (maybe?), question (text), answer, answer_key, and retry_count
		response = {'is_correct': this.isCorrect, 
					'question': this.question.questionText, 
					'answer': this.answer.studentAnswer, 
					'answer_key': `Between ${this.correctAnswer.low} and ${this.correctAnswer.high}`, 
					'retry_count': this.retryCount
				};
		this.responseSubmitted.emit({'response': response, 'attemptUpdateRequired': attemptUpdateRequired});
	}

}
