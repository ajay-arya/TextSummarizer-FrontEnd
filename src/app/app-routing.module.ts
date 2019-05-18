import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RootComponent } from './pages/root/root.component';
import { PdfComponent } from './uploads/pdf/pdf.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'uploadPdf', component: PdfComponent },
  { path: 'home', component: RootComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
