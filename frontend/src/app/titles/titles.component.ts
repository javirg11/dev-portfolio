import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-titles',
  imports: [NgFor, NgIf],
  templateUrl: './titles.component.html',
  styleUrl: './titles.component.scss'
})
export class TitlesComponent {

titulos = [
    {
      nombre: 'Título Grado en Ing. Sis. de Información',
      imagen: '/assets/tittles/certificado_grado.jpg'
    },
    {
      nombre: 'Título Grado Sup. Sistemas de Telec. e Informáticos',
      imagen: '/assets/tittles/tituloFP.jpg'
    }
  ];

  imagenSeleccionada: string | null = null;

  abrirImagen(imagen: string) {
    this.imagenSeleccionada = imagen;
  }

  cerrarImagen() {
    this.imagenSeleccionada = null;
  }
}