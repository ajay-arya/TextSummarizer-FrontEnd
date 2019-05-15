import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
// import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  url = '0.0.0.0:88';
  mainURL = this.url;

  constructor(private http: HttpClient, private router: Router) { }

  sendFile(data) {
    console.log('file:', data);
    return this.http.post(this.mainURL + '/upload', data);
  }

}
