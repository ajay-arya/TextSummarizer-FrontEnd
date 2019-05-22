import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
// import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { MatFormField } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  url = 'http://127.0.0.1:5000/api';
  mainURL = this.url;
  summary = 'summmary writesomethiggdsjgklsg   gkdsgnksggd  kdsgksg ggsdkd  dgd';
  data = 'data  anrejkdgsd sdnsdns sdjnsdng dsdnsdg fksdgksdngksndgsgsegnksg gesgsd sdgskgmgmewg';
  range = 0;

  // route: any = '';

  constructor(private http: HttpClient, private router: Router) { }

  sendFile(data) {
    return this.http.post(this.mainURL + '/upload', data);
  }

  pdfFileUpload(file: any) {
    // return this.http.post(this.mainURL + '/', file);
    return this.http.post(this.mainURL + '/upload', file);
  }

  sendWikiUrl(link) {
    return this.http.post(this.mainURL + '/scrapeWiki', link);
  }

  sendRange(range) {
    return this.http.post(this.mainURL + '/range', range);
  }

  getPreprossedData() {
    const dummy = {data: 'data'};
    return this.http.post(this.mainURL + '/getPreprocessed', dummy);
  }
}
