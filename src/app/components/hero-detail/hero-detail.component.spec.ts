import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HeroDetailComponent} from './hero-detail.component';
import {FormsModule} from "@angular/forms";
import {RouterTestingModule} from "@angular/router/testing";
import {HeroesComponent} from "../heroes/heroes.component";
import {DashboardComponent} from "../dashboard/dashboard.component";
import {HeroService} from "../../services/hero.service";
import {MessageService} from "../../services/message.service";

describe('HeroDetailComponent', () => {
  let component: HeroDetailComponent;
  let fixture: ComponentFixture<HeroDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeroDetailComponent,
        HeroesComponent,
        DashboardComponent
      ],
      providers: [
        HeroService,
        MessageService
      ],
      imports: [
        FormsModule,
        RouterTestingModule.withRoutes([])
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
