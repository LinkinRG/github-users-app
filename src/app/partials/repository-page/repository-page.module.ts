import { NgModule } from '@angular/core';

import { RepositoryPageComponent } from './repository-page.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: RepositoryPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RepositoryPageComponent, RouterModule],
  declarations: [RepositoryPageComponent],
  providers: [],
})
export class RepositoryPageModule {
}
