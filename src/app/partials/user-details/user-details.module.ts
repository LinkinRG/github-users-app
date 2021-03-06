import { NgModule } from '@angular/core';

import { UserDetailsComponent } from './user-details.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ListModule } from '../../common/list/list.module';

const routes: Routes = [
  {
    path: '',
    component: UserDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule, ListModule],
  exports: [UserDetailsComponent, RouterModule],
  declarations: [UserDetailsComponent],
  providers: [],
})
export class UserDetailsModule {
}
