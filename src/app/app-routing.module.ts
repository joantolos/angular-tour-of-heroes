import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HeroesComponent} from "./components/heroes/heroes.component";
import {HeroDetailComponent} from "./components/hero-detail/hero-detail.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      { path: 'heroes', component: HeroesComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'detail/:id', component: HeroDetailComponent }
    ])
  ]
})
export class AppRoutingModule { }
