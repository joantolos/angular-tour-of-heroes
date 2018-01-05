import { TestBed, inject } from '@angular/core/testing';

import { HeroService } from './hero.service';
import {MessagesComponent} from "../components/messages/messages.component";
import {BrowserModule} from "@angular/platform-browser";
import {HeroesComponent} from "../components/heroes/heroes.component";
import {HeroDetailComponent} from "../components/hero-detail/hero-detail.component";
import {FormsModule} from "@angular/forms";
import {AppComponent} from "../app.component";
import {MessageService} from "./message.service";
import {HttpClientModule} from "@angular/common/http";
import {InMemoryDataService} from "./in-memory-data.service";
import {AppRoutingModule} from "../app-routing.module";
import {RouterModule} from "@angular/router";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";

describe('HeroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HeroService,
        MessageService
      ],
      imports: [
        HttpClientModule
      ]
    });
  });

  it('should be created', inject([HeroService], (service: HeroService) => {
    expect(service).toBeTruthy();
  }));
});
