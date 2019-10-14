//got lots of help from this tutorial: https://scotch.io/tutorials/angular-2-http-requests-with-observables
// Imports
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SafeHtmlPipe } from '../pipes/safe-html.pipe';
import { Observable } from 'rxjs';

// Import RxJs required methods
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class DatatrackingService {

  constructor(private http: HttpClient, private safeHtml: SafeHtmlPipe) { }

  private attemptId: number = -1;
  private APIBaseUrl = '/index.php/api/';
  private assessmentId = -1;

  setAttemptId(attemptId : number) {
    this.attemptId = attemptId;
  }

  initAttempt(assessmentId : number, preview : boolean) {
    this.assessmentId = assessmentId;
    let endpoint = `${this.APIBaseUrl}attempt/${this.assessmentId}`;
    let body = {'asssesment_id' : this.assessmentId, 'preview' : preview};
    return this.http.post(endpoint, body)
      .pipe(
        map((res: any) => res),
        catchError((error:any) => Observable.throw(error.error || 'Server error'))
      );
  }

  updateAttempt(attemptCountCorrect : number, attemptCountIncorrect : number) {
    let attempt = {'count_correct': attemptCountCorrect, 'count_incorrect': attemptCountIncorrect};
    let endpoint = `${this.APIBaseUrl}attempt/update/${this.attemptId}`;
    return this.http.post(endpoint, attempt)
      .pipe(
        map((res: any) => res),
        catchError((error:any) => Observable.throw(error.error || 'Server error'))
      );
  }

  saveResponse(response) {
    response.is_correct = response.is_correct ? '1' : '0'; //convert from boolean to number for DB storage

    let endpoint = `${this.APIBaseUrl}response/${this.attemptId}`;
    return this.http.post(endpoint, response)
      .pipe(
        map((res: any) => res),
        catchError((error:any) => Observable.throw(error.error || 'Server error'))
      );
  }
}
