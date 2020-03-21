import { NgModule } from '@angular/core';

import { UserListComponent } from './user-list.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: UserListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [UserListComponent, RouterModule],
  declarations: [UserListComponent],
  providers: []
})
export class UserListModule {
}
