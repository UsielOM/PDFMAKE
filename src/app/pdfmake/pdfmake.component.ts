import { Component, OnInit } from '@angular/core';
import { PdfMakeWrapper, Txt } from 'pdfmake-wrapper';

@Component({
  selector: 'app-pdfmake',
  templateUrl: './pdfmake.component.html',
  styleUrls: ['./pdfmake.component.css']
})
export class PdfmakeComponent implements OnInit {
generarPDFWrapper(){
  const pdf = new PdfMakeWrapper(); //Creamos una nueva variable para poder usar los metodos del pdf Wrapper
  pdf.add( //add para indicar que ñadiremos elemento nuevo
    new Txt("Hellow World").bold().italics().end //Esta linea indica que agregaremos texto y su estilo end para indicar que se termino e agregar

  );
  pdf.create().open()//Create para crear el pdf y open para que cuando se active la funcion se abra el pdf en una nueva pestaña
}
  constructor() { }

  ngOnInit(): void {
  }

}
