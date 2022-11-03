//got lots of help from this tutorial: https://scotch.io/tutorials/angular-2-http-requests-with-observables
// Imports
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SafeHtmlPipe } from '../pipes/safe-html.pipe';
import { Observable } from 'rxjs';

// Import RxJs required methods
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class DatatrackingService {

  constructor(private http: HttpClient, private safeHtml: SafeHtmlPipe) { }

  private attemptId: number = -1;
  private APIBaseUrl = '/index.php/api/';
  private apiToken = null;
  private assessmentId = -1;
  private studentStorageTokenKey = 'iu-eds-qc-student-token'

  setAttemptId(attemptId : number) {
    this.attemptId = attemptId;
  }

  getStudentTokenFromStorage() {
    //if in an iframe with 3rd party cookies blocked, return what's in-memory
    if (!this.storageAvailable('sessionStorage')) {
      return this.apiToken;
    }

    return sessionStorage.getItem(this.studentStorageTokenKey);
  }

  initAttempt(assessmentId : number, attemptId : number, nonce : string, preview : boolean) {
    this.apiToken = this.getStudentTokenFromStorage();
    this.assessmentId = assessmentId;
    const endpoint = `${this.APIBaseUrl}attempt/${this.assessmentId}`;
    const body = {'asssesment_id' : this.assessmentId, 'preview' : preview, 'nonce': nonce, 'attemptId': attemptId};

    const httpOptions = {
      headers: new HttpHeaders({})
    };

    if (this.apiToken) {
      httpOptions.headers = httpOptions.headers.set('Authorization', `Bearer ${this.apiToken}`);
    }

    return this.http.post(endpoint, body, httpOptions)
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

  //source: https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API#Testing_for_availability
  storageAvailable(type) {
    var storage;
    try {
      storage = window[type];
      var x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    }
    catch(e) {
      return e instanceof DOMException && (
        // everything except Firefox
        e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === 'QuotaExceededError' ||
        // Firefox
        e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
        // acknowledge QuotaExceededError only if there's something already stored
        (storage && storage.length !== 0);
    }
  }

  storeStudentToken(token) {
    this.apiToken = token;

    //if in an iframe with 3rd party cookies blocked, can't store
    if (!this.storageAvailable('sessionStorage')) {
      return;
    }

    sessionStorage.setItem(this.studentStorageTokenKey, this.apiToken);
  }
}
