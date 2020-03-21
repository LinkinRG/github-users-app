import { NgModule } from '@angular/core';

import { UserDetailsComponent } from './user-details.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: UserDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [UserDetailsComponent, RouterModule],
  declarations: [UserDetailsComponent],
  providers: [],
})
export class UserDetailsModule {
}
