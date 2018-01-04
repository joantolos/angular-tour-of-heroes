import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DashboardComponent} from './dashboard.component';
import {MessageService} from "../../services/message.service";
import {HeroService} from "../../services/hero.service";
import {HeroesComponent} from "../heroes/heroes.component";
import {HeroDetailComponent} from "../hero-detail/hero-detail.component";
import {FormsModule} from "@angular/forms";
import {RouterTestingModule} from "@angular/router/testing";

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DashboardComponent,
        HeroesComponent,
        HeroDetailComponent
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
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
