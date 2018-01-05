import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HeroSearchComponent} from './hero-search.component';
import {RouterTestingModule} from "@angular/router/testing";
import {HeroService} from "../../services/hero.service";
import {MessageService} from "../../services/message.service";
import {HttpClientModule} from "@angular/common/http";

describe('HeroSearchComponent', () => {
  let component: HeroSearchComponent;
  let fixture: ComponentFixture<HeroSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeroSearchComponent
      ],
      imports: [
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
    fixture = TestBed.createComponent(HeroSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
