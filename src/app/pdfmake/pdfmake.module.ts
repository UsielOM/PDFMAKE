import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PDFMAKERoutingModule } from './pdfmake-routing.module';
import { PdfmakeComponent } from './pdfmake.component';


@NgModule({
  declarations: [
    PdfmakeComponent
  ],
  imports: [
    CommonModule,
    PDFMAKERoutingModule
  ]
})
export class PDFMAKEModule { }
