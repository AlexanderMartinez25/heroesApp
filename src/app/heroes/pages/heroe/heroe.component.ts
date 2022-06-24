import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { switchMap, tap } from "rxjs/operators";

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
    ` img {
      width:100%;
      border-radius: 5px
    }
    `
  ]
})
export class HeroeComponent implements OnInit {

  heroe!: Heroe;

  constructor(
    private route: ActivatedRoute,
    private heroeService: HeroesService,
    private router: Router,
  ) { }

  ngOnInit(): void {

    // con switchMap pasamos el id de una y consultamos 
    // al sericio con el parametro enviado
    this.route.params
      .pipe(
        switchMap(({ id }) => this.heroeService.getHeroeById(id)),
        tap(console.log)
      )
      .subscribe(heroe => this.heroe = heroe[0])
  }

  regresar() {
    this.router.navigate(['/heroes/listado']);
  }
}

