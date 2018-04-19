import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { AppRodapeComponent } from './app-rodape/app-rodape.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { AlertaComponent } from './alerta/alerta.component';
import { PrimeiroExemploComponent } from './primeiro-exemplo/primeiro-exemplo.component';
import { SegundoExemploComponent } from './segundo-exemplo/segundo-exemplo.component';
import { FormsModule } from '@angular/forms';
import { TerceiroExemploComponent } from './terceiro-exemplo/terceiro-exemplo.component'


@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    AppRodapeComponent,
    NoticiaComponent,
    AlertaComponent,
    PrimeiroExemploComponent,
    SegundoExemploComponent,
    TerceiroExemploComponent

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
