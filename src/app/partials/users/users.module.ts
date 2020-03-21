import { NgModule } from '@angular/core';

import { UsersComponent } from './users.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ListModule } from '../../common/list/list.module';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule, ListModule],
  exports: [UsersComponent, RouterModule],
  declarations: [UsersComponent],
  providers: []
})
export class UsersModule {
}
