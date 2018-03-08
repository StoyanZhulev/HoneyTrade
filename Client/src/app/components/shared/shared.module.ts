import { NgModule } from '@angular/core'
import { sharedComponents } from './index'
import { CommonModule } from "@angular/common"
import { RouterModule } from "@angular/router"
import { MDBBootstrapModules } from 'ng-mdb-pro';
import { HomeComponent } from "./home/home.component";


import { AuthenticationModule } from '../auth/auth.module';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MDBBootstrapModules,
    AuthenticationModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDHLwBs5R58FG1WXDqxzwx_ExpQK4BiTIQ'
    }),
  ],
  declarations: [
    ...sharedComponents
  ],
  exports: [
    ...sharedComponents
  ],
  providers: []
})

export class SharedModule {
}
