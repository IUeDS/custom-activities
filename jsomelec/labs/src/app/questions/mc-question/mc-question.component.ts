import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lab-mc-question',
  templateUrl: './mc-question.component.html',
  styleUrls: ['./mc-question.component.css']
})
export class McQuestionComponent implements OnInit {

	feedbackVisible : boolean = true; //show "click submit" text by default
	feedback : string = 'Click submit to tell me your results!';
	selectedOption = null;
	correctAnswer = null;
	isCorrect : boolean = false;
	retryCount: number = 0;
	correctAnswerRecorded : boolean = false; //don't update attempt once correct answer recorded
	incorrectAnswerRecorded : boolean = false; //only update attempt after 1st incorrect response
	@Input() question;
	@Output() responseSubmitted = new EventEmitter();

	ngOnInit() {}

	selectOption(option) {
		this.selectedOption = option;
	}

	submitAnswer() {
		if (this.selectedOption) {
			this.feedback = this.selectedOption.feedback;
			this.isCorrect = this.selectedOption.correct;
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

	getCorrectAnswer() {
		this.question.options.forEach(option => {
			if (option.correct) {
				this.correctAnswer = option;
			}
		});
	}

	recordResponse() {
		this.getCorrectAnswer();
		let attemptUpdateRequired = false;
		let response = {
			'is_correct': this.isCorrect, 
			'question': this.question.questionText,
			'answer': this.selectedOption.text,
			'answer_key': this.correctAnswer.text,
			'retry_count': this.retryCount
		};
		
		//if an image as an answer (I think there's only one question like this), use alt text instead
		if (this.selectedOption.altText && this.correctAnswer.altText) {
			response.answer = this.selectedOption.altText;
			response.answer_key = this.correctAnswer.altText;
		}

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
		this.responseSubmitted.emit({'response': response, 'attemptUpdateRequired': attemptUpdateRequired});
	}
}

