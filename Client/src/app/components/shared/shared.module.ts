import { NgModule } from '@angular/core'
import { sharedComponents } from './index'
import { CommonModule } from "@angular/common"
import { RouterModule } from "@angular/router"
import { MDBBootstrapModules } from 'ng-mdb-pro';

import { AuthenticationModule } from '../auth/auth.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MDBBootstrapModules,
    AuthenticationModule
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
