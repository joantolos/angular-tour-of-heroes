import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HeroesComponent} from './heroes.component';
import {FormsModule} from "@angular/forms";
import {HeroDetailComponent} from "../hero-detail/hero-detail.component";
import {MessageService} from "../message.service";
import {HeroService} from "../hero.service";
import {RouterTestingModule} from "@angular/router/testing";
import {DashboardComponent} from "../dashboard/dashboard.component";

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeroesComponent,
        HeroDetailComponent,
        DashboardComponent
      ],
      imports: [
        FormsModule,
        RouterTestingModule.withRoutes([])
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
