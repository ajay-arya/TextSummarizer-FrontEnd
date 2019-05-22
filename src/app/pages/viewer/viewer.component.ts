import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { ServerService } from 'src/app/service/server.service';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements OnInit {
  summary;
  data;
  dataFlag = false;
  range;

  constructor(private server: ServerService, private render: Renderer2, private el: ElementRef) { }

  ngOnInit() {
    this.data = this.server.data;
    this.range = this.server.range;
    this.summary = this.server.summary;

    const loadingEle = this.el.nativeElement.getElementsByClassName('loading')[0];
    this.render.removeClass(loadingEle, 'none');
    setTimeout(() => {
      this.render.addClass(loadingEle, 'none');
    }, 200);

    this.server.getPreprossedData().subscribe((res) => {
      console.log(res);
      const temp: any = res;
      if (temp.Status === 'success') {
        this.server.data = temp.preprocessed;
        this.data = this.server.data;
        this.server.summary = temp.summary;
        this.summary = this.server.summary;
      }
    }, (err) => {
      console.log(err);
    });
  }

  switcher() {
    // const data = this.el.nativeElement.getElementsByClassName('dataa')[0];
    // this
    this.dataFlag = !this.dataFlag;
  }
}
