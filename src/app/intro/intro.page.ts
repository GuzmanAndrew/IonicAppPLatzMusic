import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  slideOps = {
    initialSlide: 0,
    slidesPerView: 1,
    centeredSlides: true,
    speed: 400
  }

  slides = [
    {
      title: "Escucha tu música",
      subTitle: "En cualquier lugar",
      description: `Los mejores álbumes, las mejores canciones. Escucha y comparte en
      cualquier momento, a todas horas.`,
      icon: "play"
    },
    {
      title: "Accede al exclusivo",
      subTitle: "Modo Deporte",
      description: `Crea una playlist basada en tu actividad física. <br />
      Ten reportes y acceso a lo que necesites, integrando con Gps!`,
      icon: "videocam"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
