import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { NoticiaComponent } from '../noticia/noticia.component';
import { PrimeiroExemploComponent } from '../primeiro-exemplo/primeiro-exemplo.component';
import { SegundoExemploComponent } from '../segundo-exemplo/segundo-exemplo.component';
import { TerceiroExemploComponent } from '../terceiro-exemplo/terceiro-exemplo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [

    NoticiaComponent,
    PrimeiroExemploComponent,
    SegundoExemploComponent,
    TerceiroExemploComponent
  ],
  exports: [
    NoticiaComponent,
  ]
})
export class NoticiaModule { }
