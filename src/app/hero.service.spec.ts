import { TestBed, inject } from '@angular/core/testing';

import { HeroService } from './hero.service';
import {MessagesComponent} from "./messages/messages.component";
import {BrowserModule} from "@angular/platform-browser";
import {HeroesComponent} from "./heroes/heroes.component";
import {HeroDetailComponent} from "./hero-detail/hero-detail.component";
import {FormsModule} from "@angular/forms";
import {AppComponent} from "./app.component";
import {MessageService} from "./message.service";

describe('HeroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HeroService,
        MessageService
      ]
    });
  });

  it('should be created', inject([HeroService], (service: HeroService) => {
    expect(service).toBeTruthy();
  }));
});
