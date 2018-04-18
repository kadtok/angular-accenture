import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import{TopoApp} from './topo/topo.component';
import { AppRodapeComponent } from './app-rodape/app-rodape.component';


@NgModule({
  declarations: [
    AppComponent,
    TopoApp,
    AppRodapeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
