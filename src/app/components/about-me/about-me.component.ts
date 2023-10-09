import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent {
  public currentSelected = 0;
  public accordions = [
    {
      title: 'Educación',
      isOpen: true,
      items: [
        {
          title: 'Ciclo formativo superior DAW',
          site: 'Instituto CDP Jose Cabrera',
          years: '2021-2023',
        },
        {
          title: 'Bachillerato CITE',
          site: 'Instituto I.E.S La Granja',
          years: '2017-2019',
        },
        {
          title: 'Educación secundaria',
          site: 'Instituto I.E.S La Campiña',
          years: '2013-2017',
        },
      ],
    },
    {
      title: 'Laboral',
      isOpen: false,
      items: [
        {
          title: 'Desarrollador PHP',
          site: 'Controlnet',
          about:
            'Desarrollo de un proyecto en Debian con Php y Javascript con base en Laravel. Adicionalmente experiencia en soporte de servidores',
          years: 'Marzo 2023-Junio 2023',
        },
      ],
    },
  ];

  changeView(index: number) {
    if (this.currentSelected === index) {
      return;
    }
    this.accordions[index].isOpen = !this.accordions[index].isOpen;
    this.accordions[this.currentSelected].isOpen =
      !this.accordions[this.currentSelected].isOpen;

    this.currentSelected = index;
  }
}
