import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
// import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { MatFormField } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  url = 'http://127.0.0.1:5000/api/v1';
  mainURL = this.url;
  summary = 'summmary writesomethiggdsjgklsg   gkdsgnksggd  kdsgksg ggsdkd  dgd';
  data = 'data  anrejkdgsd sdnsdns sdjnsdng dsdnsdg fksdgksdngksndgsgsegnksg gesgsd sdgskgmgmewg';
  range = 0;
  pdfFlag = false;

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

  sendRange(range, flag) {
    if (flag === 0) {
      const dummy = { line: range, wiki: 'no' };
      return this.http.post(this.mainURL + '/range', dummy);
    } else {
      const dummy = { line: range, wiki: 'yes' };
      return this.http.post(this.mainURL + '/range', dummy);
    }
  }

  sendWikiRange(range) {
    const dummy = { line: range };
    return this.http.post(this.mainURL + '/wikiRange', dummy);
  }

  getPreprossedData() {
    // const dummy = {link: 'data'};
    // return this.http.post(this.mainURL + '/test', dummy);
    const dummy = { data: 'data' };
    return this.http.post(this.mainURL + '/getDetails', dummy);
  }

  summaryzeWiki(range) {
    console.log('scrap', range);
    const dummy = { line: range, data: this.data };
    return this.http.post(this.mainURL + '/sumarizeWiki', dummy);
  }
}
