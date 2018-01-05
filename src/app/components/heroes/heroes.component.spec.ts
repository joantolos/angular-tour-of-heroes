import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HeroesComponent} from './heroes.component';
import {FormsModule} from "@angular/forms";
import {HeroDetailComponent} from "../hero-detail/hero-detail.component";
import {MessageService} from "../../services/message.service";
import {HeroService} from "../../services/hero.service";
import {RouterTestingModule} from "@angular/router/testing";
import {DashboardComponent} from "../dashboard/dashboard.component";
import {HttpClientModule} from "@angular/common/http";
import {HeroSearchComponent} from "../hero-search/hero-search.component";

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeroesComponent,
        HeroDetailComponent,
        DashboardComponent,
        HeroSearchComponent
      ],
      imports: [
        FormsModule,
        RouterTestingModule.withRoutes([]),
        HttpClientModule
      ],
      providers: [
        HeroService,
        MessageService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
