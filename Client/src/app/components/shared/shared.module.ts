import { NgModule } from '@angular/core'
import { sharedComponents } from './index'
import { CommonModule } from "@angular/common"
import { RouterModule } from "@angular/router"
import { MDBBootstrapModules } from 'ng-mdb-pro';
import { HomeComponent } from "./home/home.component";
import {TimeAgoPipe} from 'time-ago-pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SatPopoverModule } from '@ncstate/sat-popover';


import { AuthenticationModule } from '../auth/auth.module';
import { AgmCoreModule } from '@agm/core';
import { TimeAgoModule } from '../time-ago/time-ago.module';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    SatPopoverModule,
    RouterModule,
    MDBBootstrapModules,
    AuthenticationModule,
    TimeAgoModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDHLwBs5R58FG1WXDqxzwx_ExpQK4BiTIQ'
    }),
  ],
  declarations: [
    ...sharedComponents,
  ],
  exports: [
    ...sharedComponents
  ],
  providers: []
})

export class SharedModule {
}
