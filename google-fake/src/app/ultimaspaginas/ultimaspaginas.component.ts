import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ultimaspaginas',
  templateUrl: './ultimaspaginas.component.html',
  styleUrls: ['./ultimaspaginas.component.css']
})
export class UltimaspaginasComponent implements OnInit {


  google_logo: string = "google-fake/imagens/google_logo.jpg"
  ultimaspaginas: string[] = [
    "Pagina 1",
    "Pagina 2",
    "Pagina 3",
    "Pagina 4",
    "Pagina 5",
    "Pagina 6",
    "Pagina 7",
    "Pagina 8"];

  mostrarPagina: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  public esconderPagina() {
    this.mostrarPagina = false;
  }

  public mostrarPaginas() {
    this.mostrarPagina = true;
}

}
