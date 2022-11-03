import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { QuestionService } from '../../services/question.service';
import { DatatrackingService } from '../../services/datatracking.service';
import { LabScripts } from '../lab-scripts';

@Component({
  selector: 'lab-page',
  templateUrl: './lab-page.component.html',
  styleUrls: ['./lab-page.component.css'],
  providers: [
  	QuestionService,
  	DatatrackingService
  ]
})
export class LabPageComponent implements OnInit, AfterViewInit {

  constructor(
  			private questionService: QuestionService,
  			private datatrackingService: DatatrackingService,
  			private route: ActivatedRoute,
  			private router: Router) {}

  labNum = 15; //default, for now
  pageNum = 1; //default, for now
  questions = [];
  assessmentId : number = -1; //default; retrieved from query param
  attemptId : number = -1; //default; retrieved later by subscription
  attemptCountCorrect : number = 0;
  attemptCountIncorrect : number = 0;
  nonce = null;

  ngOnInit() {
    //get questions
  	this.route.params.forEach((params: Params) => {
      if (params['labNum'] && params['pageNum']) {
        this.labNum = params['labNum']; //use unary operator + to convert from string to number
        this.pageNum = params['pageNum'];
      }
  	});

  	this.questions = this.questionService.getPageQuestions(this.labNum, this.pageNum);

    //init attempt
    this.route.queryParams.subscribe(params => {
      if (params['id']) {
        let preview = params['preview'] ? true : false;
        this.assessmentId = +params['id'];
        this.attemptId = +params['attemptId'];
        this.nonce = params['nonce'];
        this.datatrackingService.initAttempt(this.assessmentId, this.attemptId, this.nonce, preview)
          .subscribe(
            res =>  {
              this.attemptId = +(res.data.attemptId);
              this.datatrackingService.setAttemptId(this.attemptId);
              const apiToken = res.data.apiToken;
              if (apiToken) {
                this.datatrackingService.storeStudentToken(apiToken);
              }
            },
            err => {
              console.log(err);
              return false;
            });
        }
      });
  }

  ngAfterViewInit() {
  	let labScripts = new LabScripts();
  	labScripts.initScripts(this.pageNum);
  }

  onResponseSubmitted(event) {
    if (event.attemptUpdateRequired) {
      if (event.response.is_correct) {
        this.attemptCountCorrect++;
      }
      else {
        this.attemptCountIncorrect++;
      }
      this.updateAttempt();
    }
    this.insertResponse(event.response);
  }

  //note: don't really need anything back from this, but subscribe() required to put it through
  updateAttempt() {
    if (this.attemptId < 0) { //don't record if we never got an attempt id
      return false;
    }
    this.datatrackingService.updateAttempt(this.attemptCountCorrect, this.attemptCountIncorrect)
        .subscribe(
          res => {
            return true;
          },
          err => {
            console.log(err);
            return false;
          }
        );
  }

  //note: don't really need anything back from this, but subscribe() required to put it through
  insertResponse(response) {
    if (this.attemptId < 0) { //don't record if we never got an attempt id
      return false;
    }
    this.datatrackingService.saveResponse(response)
      .subscribe(
        res => {
          return true;
        },
        err => {
          console.log(err);
          return false;
        }
      );
  }

}
