import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServerService } from '../../service/server.service';
import { Renderer2 } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-rang-page',
  templateUrl: './rang-page.component.html',
  styleUrls: ['./rang-page.component.scss']
})
export class RangPageComponent implements OnInit {

  value = 5;
  constructor(private router: Router, private server: ServerService, private render: Renderer2, private el: ElementRef) { }

  ngOnInit() {
    const loadingEle = this.el.nativeElement.getElementsByClassName('loading')[0];
    this.render.removeClass(loadingEle, 'none');
    setTimeout(() => {
      this.render.addClass(loadingEle, 'none');
    }, 200);
  }

  slider(event) {
    this.value = event.value as number;
  }

  submit() {
    // this.server.summaryzeWiki(this.value).subscribe((res) => {
    //   console.log(res);
    //   const temp: any = res;
    //   this.server.data = temp.preprocessed;
    //   this.server.summary = temp.summary;
    //   this.router.navigate(['/view']);
    // });

    const loadingEle = this.el.nativeElement.getElementsByClassName('loading')[0];
    this.render.removeClass(loadingEle, 'none');
    this.server.range = this.value;
    if (this.server.pdfFlag) {
      console.log('got', this.value);
      this.server.sendRange(this.value, 0).subscribe((res) => {
        console.log(res);
        const temp: any = res;
        if (temp.Status === 'success') {
          this.server.data = temp.preprocessed;
          this.server.summary = temp.summary;
          this.router.navigate(['/view']);
        } else {
          alert(temp.error);
        }
      });
    } else {
      console.log('elsepart wiki range');
      this.server.sendRange(this.value, 1).subscribe((res) => {
        console.log(res);
        const temp: any = res;
        if (temp.Status === 'success') {
          this.server.data = temp.preprocessed;
          this.server.summary = temp.summary;
          this.router.navigate(['/view']);
        } else {
          alert(temp.error);
        }
      });
    }
  }

}
