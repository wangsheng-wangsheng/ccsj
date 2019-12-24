import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {IndexComponent} from './index/index.component';
import {SuperAdminComponent} from './super-admin/super-admin.component';
import {AbcComponent} from './abc/abc.component';
import {EfgComponent} from './efg/efg.component';

const routes: Routes = [
  {path: '', component: LoginComponent, pathMatch: 'full'},
  {path: 'index', component: IndexComponent, children: [
      {path: 'abc', component: AbcComponent},
      {path: 'efg', component: EfgComponent},
      {path: 'superAdmin', component: SuperAdminComponent},
      ]
  },
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
