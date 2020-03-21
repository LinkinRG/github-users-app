import { NgModule } from '@angular/core';

import { Error404Component } from './error-404.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [Error404Component, RouterModule],
  declarations: [Error404Component],
  providers: [],
})
export class Error404Module {
}
