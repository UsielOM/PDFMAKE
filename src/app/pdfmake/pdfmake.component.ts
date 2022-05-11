import { Component, OnInit } from '@angular/core';
import { PdfMakeWrapper, Txt } from 'pdfmake-wrapper';

import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;


@Component({
  selector: 'app-pdfmake',
  templateUrl: './pdfmake.component.html',
  styleUrls: ['./pdfmake.component.css']
})
export class PdfmakeComponent implements OnInit {


generarPDFMake(){
  var dd = {
	content: [
		'First paragraph',
		'Another paragraph, this time a little bit longer to make sure, this line will be divided into at least two lines'
	]
	
}
const pdf = pdfMake.createPdf(dd);
pdf.open();
}
  
generarPDFWrapper(){
  const pdf = new PdfMakeWrapper(); //Creamos una nueva variable para poder usar los metodos del pdf Wrapper
  pdf.add( //add para indicar que ñadiremos elemento nuevo
    new Txt("Hellow World").bold().italics().end //Esta linea indica que agregaremos texto y su estilo, end para indicar que se termino de agregar elementos

  );
  pdf.create().open()//Create para crear el pdf y open para que cuando se active la funcion se abra el pdf en una nueva pestaña
}


  constructor() { }

  ngOnInit(): void {
  }

}
