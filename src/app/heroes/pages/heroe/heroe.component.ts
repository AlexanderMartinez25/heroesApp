import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { switchMap } from "rxjs/operators";

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {

  heroe!: Heroe;

  constructor(
    private route: ActivatedRoute,
    private heroeService: HeroesService
  ) { }

  ngOnInit(): void {

    // con switchMap pasamos el id de una y consultamos 
    // al sericio con el parametro enviado
    this.route.params
      .pipe(
        switchMap(({ id }) => this.heroeService.getHeroeById(id))
      )
      .subscribe(heroe => this.heroe = heroe)

  }
}

