import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RootComponent } from './pages/root/root.component';
import { PdfComponent } from './uploads/pdf/pdf.component';
import { ViewerComponent } from './pages/viewer/viewer.component';
import { RangPageComponent } from './dummy/rang-page/rang-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'uploadPdf', component: PdfComponent },
  { path: 'home', component: RootComponent },
  { path: 'view', component: ViewerComponent },
  { path: 'SpecifyRange', component: RangPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
