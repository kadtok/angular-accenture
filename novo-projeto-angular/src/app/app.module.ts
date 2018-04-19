import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NoticiaModule } from './noticia/noticia.module';


import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { AppRodapeComponent } from './app-rodape/app-rodape.component';
import { AlertaComponent } from './alerta/alerta.component';


@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    AppRodapeComponent,
    AlertaComponent,

  ],
  imports: [
    BrowserModule,
    NoticiaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
