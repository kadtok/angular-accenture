import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { AppRodapeComponent } from './app-rodape/app-rodape.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { AlertaComponent } from './alerta/alerta.component';


@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    AppRodapeComponent,
    NoticiaComponent,
    AlertaComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
