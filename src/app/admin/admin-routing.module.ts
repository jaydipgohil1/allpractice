import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  {
    path: 'admin', children: [
      { path: 'login', component: LoginComponent },
      { path: 'list', component: ListComponent }
      
      
    ]
    
  }

];
// console.log('admin'); 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
