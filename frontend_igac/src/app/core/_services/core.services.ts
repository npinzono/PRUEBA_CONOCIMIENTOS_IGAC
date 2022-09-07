import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders,  HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

const httpOptions = {
  headers : new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class CoreService {

  protected baseUrl: string = "http://localhost:8080/";

  constructor(private http: HttpClient) {}

  get(endpoint: string) {
    console.log(this.baseUrl + endpoint);
    return this.http.get(this.baseUrl + endpoint, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  post(endpoint: string, element: any) {
    return this.http.post(this.baseUrl + endpoint, element, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  putWithOutParam(endpoint: string, element: any) {
    return this.http.put(this.baseUrl + endpoint, element, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  put(endpoint: string, element: { codigo: string; }) {
    return this.http.put(this.baseUrl + endpoint + '/' + element.codigo, element, httpOptions).pipe(
      catchError(this.handleError)
    );
  }
  
  delete(endpoint: string, id: string) {
    console.log(this.baseUrl + endpoint + id);
    return this.http.delete(this.baseUrl + endpoint + id, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${JSON.stringify(error.error)}`);
    }
    // return an observable with a user-facing error message
    return throwError(error.error);
  }

}
