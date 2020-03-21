import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'repo/:id',
    loadChildren: () => import('./partials/repository-page/repository-page.module').then(m => m.RepositoryPageModule)
  },
  {
    path: 'user/:username',
    loadChildren: () => import('./partials/user-details/user-details.module').then(m => m.UserDetailsModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./partials/user-list/user-list.module').then(m => m.UserListModule)
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
