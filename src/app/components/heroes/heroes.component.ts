import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Heroe [] = [];

  constructor( private heroesService: HeroesService, private router: Router ) {
    // console.log('Constructor...');
  }

  ngOnInit() {
    console.log('ngOnInit');
    this.heroes = this.heroesService.getHeroes();
  }

  verHeroe( id: number ) {
    this.router.navigate(['/heroe', id ]);
  }

}
