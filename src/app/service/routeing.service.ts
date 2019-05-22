import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ServerService } from './server.service';

@Injectable({
  providedIn: 'root'
})
export class RouteingService {

  constructor(private router: Router, private server: ServerService) { }

  // toggle() {
  //   if (this.server.route !== '') {
  //     this.router.navigate([this.server.route]);
  //   }
  // }
}
