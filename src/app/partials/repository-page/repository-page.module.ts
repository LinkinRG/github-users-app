import { NgModule } from '@angular/core';

import { RepositoryPageComponent } from './repository-page.component';
import { RouterModule, Routes } from '@angular/router';
import { ListModule } from '../../common/list/list.module';


const routes: Routes = [
  {
    path: '',
    component: RepositoryPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), ListModule],
  exports: [RepositoryPageComponent, RouterModule],
  declarations: [RepositoryPageComponent],
  providers: [],
})
export class RepositoryPageModule {
}
