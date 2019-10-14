import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lab-table-question',
  templateUrl: './table-question.component.html',
  styleUrls: ['./table-question.component.css']
})
export class TableQuestionComponent implements OnInit {

  constructor() { }

  tableClass : string = 'content_table'; //default
  questions = [];
  @Input() question;
  @Output() responseSubmitted = new EventEmitter();

  ngOnInit() {
  	//this.tableClass = question.tableClass;
  	//this.questions = question.questions;
  }

  //pass it on up the chain -- received from child question component, pass it up to the lab page
  onResponseSubmitted(event) {
  	this.responseSubmitted.emit(event);
  }

}
