import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatSliderModule,
  MatFormFieldModule,
  MatInputModule,
  MatProgressSpinnerModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { HomeComponent } from './home/home.component';
import { RootComponent } from './pages/root/root.component';
import { PdfComponent } from './uploads/pdf/pdf.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ViewerComponent } from './pages/viewer/viewer.component';
import { WaitPageComponent } from './dummy/wait-page/wait-page.component';
import { RangPageComponent } from './dummy/rang-page/rang-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RootComponent,
    PdfComponent,
    ViewerComponent,
    WaitPageComponent,
    RangPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    CommonModule,
    MatCheckboxModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    BrowserAnimationsModule,
    PdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
