import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class ConfigService {

  constructor(private http: HttpClient) { }

  getActivity(str: string) {
    let url = 'http://127.0.0.1:3000/ps7/';
    console.log(url);
    return this.http.get(url + str, httpOptions);
  }
}
