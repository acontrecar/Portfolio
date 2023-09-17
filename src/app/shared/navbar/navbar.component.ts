import { Component } from '@angular/core';

interface MenuItem {
  title: string;
  href: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  public menuItems: MenuItem[] = [
    { title: 'Sobre mi', href: '#sobreMi' },
    { title: 'Habilidades', href: '#habilidades' },
    { title: 'Projectos', href: '#proyectos' },
    { title: 'Contacto', href: '#contactame' },
  ];

  public isMenuOpen = false;

  public toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    console.log(this.isMenuOpen);
  }
}
