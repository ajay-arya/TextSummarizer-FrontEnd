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
    this.value = event.value;
  }

  submit() {
    console.log('got');
    // const loadingEle = this.el.nativeElement.getElementsByClassName('loading')[0];
    // this.render.removeClass(loadingEle, 'none');
    this.server.range = this.value;
    const sendData = { range: this.value };
    this.server.sendRange(this.value).subscribe((res) => {
      // this.server.sendRange(sendData).subscribe((res) => {
      console.log(res);
      const temp: any = res;
      if (temp.Status === 'success') {
        this.router.navigate(['/view']);
      } else {
        alert(temp.error);
      }
    });
  }

}
