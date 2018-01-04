import { Injectable } from '@angular/core';
import {HEROES} from "./mock-heroes";
import {Hero} from "./hero";
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";
import { MessageService } from './message.service';

@Injectable()
export class HeroService {

  constructor(private messageService : MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of (HEROES);
  }

}
