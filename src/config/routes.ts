import {Routes} from "@angular/router";
import {HeroesComponent} from "../app/heroes/heroes.component";
import {HeroDetailComponent} from "../app/hero-detail/hero-detail.component";
import {DashboardComponent} from "../app/dashboard/dashboard.component";

export const ROUTES: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent }
];
