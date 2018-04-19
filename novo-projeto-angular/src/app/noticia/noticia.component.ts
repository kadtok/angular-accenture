import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent implements OnInit {

  noticias: string[] = ["Noticia1", "Noticia2", "Noticia3", "Noticia4"];
  mostrarNoticia: boolean = true;
  titulo: string = 'Olar, nhaí?';
  texto: string = 'Boa tarde, estou com sono.';
  caminho_imagem: string = '../../assets/Menina.png';

  constructor() { }

  ngOnInit() {
  }

  public esconderNoticia() {
    this.mostrarNoticia = false;
  }

  public mostrarNoticias() {
    this.mostrarNoticia = true;
  }

}
