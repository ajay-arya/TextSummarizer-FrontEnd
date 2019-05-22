import { Component, OnInit } from '@angular/core';
import { ServerService } from '../../service/server.service';
import { RouteingService } from '../../service/routeing.service';

@Component({
  selector: 'app-wait-page',
  templateUrl: './wait-page.component.html',
  styleUrls: ['./wait-page.component.scss']
})
export class WaitPageComponent implements OnInit {

  constructor(private server: ServerService, private routeing: RouteingService) { }

  ngOnInit() {
    // setTimeout(() => {
    //   // this.server.move
    // }, 200);
  }

}
