import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from './list/list.component';
import {LoginComponent} from './login/login.component'
const routes: Routes = [
  {path:'admin-lazy-loading-routing-login',component:LoginComponent},
  {path:'admin-lazy-loading-routing-list',component:ListComponent}
];
console.log('lazy admin');
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminLazyLoadingRoutingRoutingModule { }
