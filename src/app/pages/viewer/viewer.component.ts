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

  constructor(private server: ServerService, private render: Renderer2, private el: ElementRef) { }

  ngOnInit() {
    this.data = this.server.data;
    this.summary = this.server.summary;
  }

  switcher() {
    // const data = this.el.nativeElement.getElementsByClassName('dataa')[0];
    // this
    this.dataFlag = !this.dataFlag;
  }
}
