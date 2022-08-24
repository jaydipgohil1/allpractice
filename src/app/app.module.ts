import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AdminModule} from './admin/admin.module';
import {UsersModule} from './users/users.module';
import { LoginComponent } from './users-lazy-loading-routing/login/login.component';
import { ListComponent } from './users-lazy-loading-routing/list/list.component';
import { AdminlistLzLoComComponent } from './adminlist-lz-lo-com/adminlist-lz-lo-com.component';
import { UserslistLzLoComComponent } from './userslist-lz-lo-com/userslist-lz-lo-com.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListComponent,
    AdminlistLzLoComComponent,
    UserslistLzLoComComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
