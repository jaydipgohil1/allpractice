import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLazyLoadingRoutingModule } from './admin-lazy-loading-routing/admin-lazy-loading-routing.module';

const routes: Routes = [
  {
    path: 'admin-lazy-loading-routing', loadChildren: () => import('./admin-lazy-loading-routing/admin-lazy-loading-routing.module').then(mod => mod.AdminLazyLoadingRoutingModule)
  },
  {
    path: 'users-lazy-loading-routing', loadChildren: () => import('./users-lazy-loading-routing/users-lazy-loading-routing.module').then(mod => mod.UsersLazyLoadingRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
