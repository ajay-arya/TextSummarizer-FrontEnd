import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/service/server.service';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.scss']
})
export class PdfComponent implements OnInit {
  file: any;
  pdf: any = 'assets/NO_FILE.pdf';
  value;
  FiletoUpload = new FormData();

  constructor(private server: ServerService) { }

  ngOnInit() {
  }

  slider(event) {
    console.log(event.value);
  }

  view() {
    console.log(this.value);
  }

  onFileSelected(event1) {
    this.file = event1.target.files[0] as File;
    // tslint:disable-next-line:new-parens
    const reader = new FileReader;
    reader.onload = (event: any) => {
      this.pdf = event.target.result;
    };
    reader.readAsDataURL(this.file);
    this.FiletoUpload.append('inputFile', this.file, this.file.name);
  }

  publish() {
    this.server.pdfFileUpload(this.FiletoUpload)
      .subscribe((res) => {
        console.log(res);
      }, (err) => {
        console.log(err);
      });
  }
}
