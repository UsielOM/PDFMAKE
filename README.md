# PDFMAKE

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Comenzando 🚀

_El modulo lo pueden encontrar entrando a la carpeta de `src/app/pdfmake` ._

Ya tiene su  **MODULO Y COMPONENTE NECESARIO** para poder usarse en otro proyecto


### Pre-requisitos 📋

_Que cosas necesitas para utilizar correctamente nuestro modulo_

Instalar las sguientes dependencias 
```
1.- pdfmake-wrapper

2.- pdfmake

3.- types/pdfmake
```

### Instalación 🔧

_Esto seria lo que necesitan instalar para poder usar bien el mopdulo_

_Paso 1_

Instala primero esta dependencia:
```
npm i pdfmake-wrapper
```

_Paso 2_

Depues insatala esto:
```
npm install pdfmake --save
```
_Paso 3_

Por ultimo insatala esto:
```
npm instalar @types/pdfmake --save-dev
```

## Configurando el app module  ⚙️

_Deberas poner esto en tu app.module principal abajo de su ultimo import_

```
// Import pdfmake-wrapper and the fonts to use
import { PdfMakeWrapper } from 'pdfmake-wrapper';
import * as pdfFonts from "pdfmake/build/vfs_fonts"; // fonts provided for pdfmake

// If any issue using previous fonts import. you can try this:
// import pdfFonts from "pdfmake/build/vfs_fonts";

// Set the fonts to use
PdfMakeWrapper.setFonts(pdfFonts);

```

## Autores ✒️

_Integrantes del equipo Escuadron alfa lobo maravilla _

* **Orihuela Monroy Usiel** - *Lider* - [UsielOM](https://github.com/UsielOM)
* **Trejo Brenda Julia** - *Documentación* - [bjuliatrejo](https://github.com/bjuliatrejo)
* **Padilla Trueba Ana Paola** - *Documentación PDFMAKE* - [AnaPaola23](https://github.com/AnaPaola23)
* **Ibarra Cruz Miguel** - *Documentación PDFMAKE-WRAPPER* - [MiguelIC1](https://github.com/MiguelIC1)


---
⌨️ con ❤️ por [EQUIPO 4] 😊
