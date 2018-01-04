import {Routes} from "@angular/router";
import {HeroesComponent} from "../heroes/heroes.component";
import {HeroDetailComponent} from "../hero-detail/hero-detail.component";
import {DashboardComponent} from "../dashboard/dashboard.component";

export const ROUTES: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent }
];
