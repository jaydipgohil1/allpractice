import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { UsersModule } from './users/users.module';
import { LoginComponent } from './users-lazy-loading-routing/login/login.component';
import { ListComponent } from './users-lazy-loading-routing/list/list.component';
import { AdminlistLzLoComComponent } from './adminlist-lz-lo-com/adminlist-lz-lo-com.component';
import { UserslistLzLoComComponent } from './userslist-lz-lo-com/userslist-lz-lo-com.component'
// import { AngularFireModule } from '@angular/fire';
// import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment.prod';
import { FirebaseDemoComponent } from './firebase-demo/firebase-demo.component';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListComponent,
    AdminlistLzLoComComponent,
    UserslistLzLoComComponent,
    FirebaseDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    UsersModule,
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAdKcqzCQ2xvfhIKOZVssw4Y3EWov2TXzU",
      authDomain: "angular-demo-1f962.firebaseapp.com",
      projectId: "angular-demo-1f962",
      storageBucket: "angular-demo-1f962.appspot.com",
      messagingSenderId: "123156195145",
      appId: "1:123156195145:web:077c9abefa0961b324dc98",
      measurementId: "G-K03MN155X1"
    }),
    AngularFirestoreModule,
    MatDialogModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
