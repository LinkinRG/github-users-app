import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'repo/:owner/:name',
    loadChildren: () => import('./partials/repository-page/repository-page.module').then(m => m.RepositoryPageModule)
  },
  {
    path: 'user/:username',
    loadChildren: () => import('./partials/user-details/user-details.module').then(m => m.UserDetailsModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./partials/users/users.module').then(m => m.UsersModule)
  },
  {
    path: 'error-404',
    loadChildren: () => import('./common/error-404/error-404.module').then(m => m.Error404Module)
  },
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'error-404',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
