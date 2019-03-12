import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.services';

@Component({
  selector: 'app-buscardor',
  templateUrl: './buscardor.component.html'
})
export class BuscardorComponent implements OnInit {

  terminoHtml: string;
  termino = 'termino';
  heroes: any[] = [];
  constructor( private activatedRoute: ActivatedRoute, private heroesService: HeroesService ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.terminoHtml = params[this.termino];
      this.heroes = this.heroesService.buscarHeroes( params[this.termino] );
      console.log(this.heroes);
    });
  }

}
