//NOTE, MM, 4/23/21: just reusing the datatracking service from the jsomelec labs wholesale;
//wouldn't typically use rxjs, QC doesn't, but this should work for temporary purposes

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Import RxJs required methods
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DatatrackingService {

  private attemptId: number = null;
  private APIBaseUrl = '/index.php/api/';
  private assessmentId = null;

  constructor(private http: HttpClient) { }

  setAttemptId(attemptId : number) {
    this.attemptId = attemptId;
  }

  gradePassback(attemptId : number) {
    let endpoint = `${this.APIBaseUrl}grade/passback`;
    let body = { 'attemptId': attemptId };
    return this.http.post(endpoint, body)
      .pipe(
        map((res: any) => res),
        catchError((error:any) => Observable.throw(error.error || 'Server error'))
      );
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

  updateAttempt(attemptCountCorrect : number, attemptCountIncorrect : number, complete: number, calculated_score: number) {
    let attempt = {'count_correct': attemptCountCorrect, 'count_incorrect': attemptCountIncorrect, complete, calculated_score};
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
