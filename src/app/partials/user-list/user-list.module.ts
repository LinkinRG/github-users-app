import { NgModule } from '@angular/core';

import { UserListComponent } from './user-list.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: UserListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [UserListComponent, RouterModule],
  declarations: [UserListComponent],
  providers: []
})
export class UserListModule {
}
