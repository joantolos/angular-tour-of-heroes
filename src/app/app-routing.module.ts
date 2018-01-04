import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ROUTES} from "../config/routes";

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(ROUTES)
  ]
})
export class AppRoutingModule { }
