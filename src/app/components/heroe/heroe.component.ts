import { Component } from '@angular/core';

@Component({
  selector: 'heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss'],
})
export class HeroeComponent {
  public downloadCV() {
    window.open('assets/Curriculum.pdf', '_blank');
  }
}
