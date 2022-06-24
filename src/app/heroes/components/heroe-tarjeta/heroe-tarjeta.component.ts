import { Component, Input } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: [
    `mat-card {
      margin-top: 20px;
    }`
  ]
})
export class HeroeTarjetaComponent {

  constructor() { }

  // la exclamación es para obviar error de typescrip
  @Input() heroe!: Heroe;


}
