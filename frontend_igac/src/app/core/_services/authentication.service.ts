import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders,  HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';

const httpOptions = {
    headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
  };

@Injectable({
    providedIn: 'root'
  })

export class AuthenticationService {

    protected baseUrl: string = "http://localhost:8080/";

    constructor(private http: HttpClient, private router: Router) {}

    login(endpoint: string, id: string, password: string) {
        let body = new URLSearchParams();
        body.set('id', id);
        body.set('password', password);
        return this.http.post(this.baseUrl + endpoint, body.toString(), httpOptions).pipe(
            catchError(this.handleError)
        );
    }

    logout() {
        sessionStorage.clear();
        this.router.navigate(['/login']);
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
