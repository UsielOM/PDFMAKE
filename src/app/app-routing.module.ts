import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PdfmakeComponent } from './pdfmake/pdfmake.component';

const routes: Routes = [
  {path: '',component:PdfmakeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
