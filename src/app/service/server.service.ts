import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
// import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { MatFormField } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  url = 'http://0.0.0.0:88';
  mainURL = this.url;

  constructor(private http: HttpClient, private router: Router) { }

  sendFile(data) {
    console.log('file:', data);
    return this.http.post(this.mainURL + '/upload', data);
  }

  pdfFileUpload(file: any) {
    console.log('inputFile', file);
    // <form action="http://0.0.0.0:88/upload" method="post" enctype="multipart/form-data">
    // const formFile = new FormData();
    // formFile.append('', file, file.name);
    return this.http.post(this.mainURL + '/upload', file);
  }

}
