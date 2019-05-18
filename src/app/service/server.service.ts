import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
// import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { MatFormField } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  url = 'http://0.0.0.0:88/api';
  mainURL = this.url;

  constructor(private http: HttpClient, private router: Router) { }

  sendFile(data) {
    return this.http.post(this.mainURL + '/upload', data);
  }

  pdfFileUpload(file: any) {
    return this.http.post(this.mainURL + '/upload', file);
  }

  sendWikiUrl(link) {
    return this.http.post(this.mainURL + '/scrapeWiki', link);
  }

}
