import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './login/logout.component';
import { IndexComponent } from './index/index.component';
import { SuperAdminComponent } from './super-admin/super-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    IndexComponent,
    SuperAdminComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
