import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { QuestionService } from './services/question.service';
import { DatatrackingService } from './services/datatracking.service';

import { AppComponent } from './app.component';
import { McQuestionComponent } from './questions/mc-question/mc-question.component';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { LabPageComponent } from './components/lab-page/lab-page.component';
import { NumericalQuestionComponent } from './questions/numerical-question/numerical-question.component';
import { SingleDropdownQuestionComponent } from './questions/single-dropdown-question/single-dropdown-question.component';
import { TableQuestionComponent } from './questions/table-question/table-question.component';
import { SafeStylePipe } from './pipes/safe-style.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LabPageComponent,
    McQuestionComponent,
    SafeHtmlPipe,
    NumericalQuestionComponent,
    SingleDropdownQuestionComponent,
    TableQuestionComponent,
    SafeStylePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    HttpClientModule,
    QuestionService,
    DatatrackingService,
    SafeHtmlPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
