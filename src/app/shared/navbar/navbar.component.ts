import { Component, OnInit } from '@angular/core';

interface MenuItem {
  title: string;
  href: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public menuItems: MenuItem[] = [
    { title: 'Sobre mí', href: '#sobreMi' },
    { title: 'Habilidades', href: '#habilidades' },
    { title: 'Projectos', href: '#proyectos' },
    // { title: 'Contacto', href: '#contactame' },
  ];

  ngOnInit(): void {
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        this.isMenuOpen = false;
      }
    });
  }

  public isMenuOpen = false;

  public toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    console.log(this.isMenuOpen);
  }
}
