import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  file: any;
  pdf: any = 'assets/NO_FILE.pdf';
  value;

  constructor() { }

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
  }

}
