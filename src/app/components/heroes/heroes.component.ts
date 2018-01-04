import { Component, OnInit } from '@angular/core';
import { Hero } from "../../domain/hero";
import { HeroService } from '../../services/hero.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  heroes: Hero[];

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(hero => this.heroes = hero);
  }

}
