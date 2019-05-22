import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';

import { Router } from '@angular/router';
import { ServerService } from 'src/app/service/server.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
}

) export class RootComponent implements OnInit {
  file: any;
  textFlag = false;
  FiletoUpload = new FormData();
  hoverBox = false;
  pdfSelected = 'No file chosen...';
  selectedPdf = false;
  pdf: any = 'assets/NO_FILE.pdf';
  dialogId: number;
  urlReference = {
    link: '',
    data: 'abc'
  };
  iframe: any;
  message = 'Hello ..!';

  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private server: ServerService, private render: Renderer2, private el: ElementRef, private sanitizer: DomSanitizer) {
    this.textFlag = true;
    this.iframe = sanitizer.bypassSecurityTrustResourceUrl('https://www.indiannicalearning.com/');
    // this.iframe = 'https://www.google.com';
    // this.iframe = sanitizer.bypassSecurityTrustResourceUrl(thi s.urlReference.link);
  }

  ngOnInit() {
    const viewElement = this.el.nativeElement.getElementsByClassName('viewer')[0];
    this.render.addClass(viewElement, 'none');
  }

  hover(cardNum) {
    const card = this.el.nativeElement.getElementsByClassName('CardContents')[cardNum];
    const preText = this.el.nativeElement.getElementsByClassName('pertext')[cardNum];

    if (this.hoverBox) {
      this.render.addClass(card, 'moveTextUp');
      this.render.addClass(preText, 'pertextShow');
    }

    if (!this.hoverBox) {
      this.render.removeClass(card, 'moveTextUp');
      this.render.removeClass(preText, 'pertextShow');
    }
  }

  showViewer() {
    this.render.removeClass(this.viewElement, 'none');
  }

  onFileSelected(event1) {
    this.file = event1.target.files[0] as File;
    this.selectedPdf = true;
    this.FiletoUpload.append('inputFile', this.file, this.file.name);
  }

  // viewing Section after selection
  view() {
    this.closeDialog(2);
  }

  viewElement() {
    // tslint:disable-next-line:new-parens
    const reader = new FileReader;

    reader.onload = (event: any) => {
      this.pdf = event.target.result;
    };
    reader.readAsDataURL(this.file);
  }

  // dialog events

  click(id) {
    this.dialogId = id;
    console.log('pdfDialog', id);
    // if (id === 0) {
    const dialog = this.el.nativeElement.getElementsByClassName('dialogBG')[this.dialogId];
    this.render.removeClass(dialog, 'none');

    setTimeout(() => {
      this.render.removeClass(dialog, 'dialogBGHide');
    }, 200);
    // }
  }

  closeDialog(flag) {
    const dialog = this.el.nativeElement.getElementsByClassName('dialogBG')[this.dialogId];
    this.render.addClass(dialog, 'dialogBGHide');
    this.render.addClass(dialog, 'none');
    if (flag === 2) {
      console.log('pdf');
      this.textFlag = false;
      const mainRow = this.el.nativeElement.getElementsByClassName('mainDiv')[0];
      this.render.addClass(mainRow, 'none');
      const submitBtn = this.el.nativeElement.getElementsByClassName('SubmitDiv')[0];
      this.render.removeClass(submitBtn, 'none');
      const viewElement = this.el.nativeElement.getElementsByClassName('viewer')[0];
      this.render.removeClass(viewElement, 'none');
      this.viewElement();
    }
    if (flag === 3) {
      console.log('url');
      this.viewText();
      this.iframe = this.sanitizer.bypassSecurityTrustResourceUrl(this.urlReference.link);
      this.textFlag = false;
      const mainRow = this.el.nativeElement.getElementsByClassName('mainDiv')[0];
      this.render.addClass(mainRow, 'none');
      const submitBtn = this.el.nativeElement.getElementsByClassName('SubmitDiv')[0];
      this.render.removeClass(submitBtn, 'none');
      const viewElement = this.el.nativeElement.getElementsByClassName('viewer')[0];
      this.render.removeClass(viewElement, 'none');
    }
  }

  wait(cls) {
    const dft = this.el.nativeElement.getElementsByClassName(cls)[0];
    this.render.addClass(dft, 'none');
    const wt = this.el.nativeElement.getElementsByClassName('waitImg')[0];
    this.render.removeClass(wt, 'none');

    setTimeout(() => {
      this.render.removeClass(dft, 'none');
      this.render.addClass(wt, 'none');
      this.view();
    }, Math.floor(Math.random() * 2001) + 1000);
  }

  addPdf() {
    if (!this.selectedPdf) {
      alert('Please select a pdf!');
    } else {
      this.wait('dialogPdf');
    }
  }

  // URL adder

  addUrl() {
    this.textFlag = false;
    if (this.urlReference.link !== '') {
      const dft = this.el.nativeElement.getElementsByClassName('dialogPdf')[this.dialogId];
      this.render.addClass(dft, 'none');
      const wt = this.el.nativeElement.getElementsByClassName('waitImg')[this.dialogId];
      this.render.removeClass(wt, 'none');
      console.log(this.urlReference);
      this.server.sendWikiUrl(this.urlReference)
        .subscribe((res) => {
          const temp: any = res;
          this.urlReference.data = temp.scrapeText;
          this.render.addClass(wt, 'none');
          this.render.removeClass(dft, 'none');
          this.closeDialog(3);
        }, (err) => {
          console.log(err);
        });
    }
  }

  // Text viewer

  viewText() {
    console.log(this.urlReference.data);
  }

  // Submit

  publish() {
    const loadingEle = this.el.nativeElement.getElementsByClassName('loading')[this.dialogId];
    this.render.removeClass(loadingEle, 'none');
    this.server.pdfFileUpload(this.FiletoUpload)
      .subscribe((res) => {
        console.log('res', res);
        const temp: any = res;
        if (temp.Status === 'success') {
          this.navigate();
        }
      }, (err) => {
        console.log(err);
      });
  }

  // Navigate to viewer Component

  navigate() {
    setTimeout(() => {
      this.router.navigate(['/SpecifyRange']);
    }, 200);
  }

}
