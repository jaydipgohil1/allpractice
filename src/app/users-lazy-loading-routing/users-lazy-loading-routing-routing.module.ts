import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from './list/list.component';
import {LoginComponent} from './login/login.component'
const routes: Routes = [
  {path:'users-lazy-loading-routing-login',component:LoginComponent},
  {path:'users-lazy-loading-routing-list',component:ListComponent}
];
console.log('lazy users');
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersLazyLoadingRoutingRoutingModule { }
