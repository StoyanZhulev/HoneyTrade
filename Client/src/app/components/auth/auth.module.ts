import { NgModule } from "@angular/core"
import { authenticationComponents } from "./index"
import { CommonModule } from "@angular/common"
import { FormsModule } from "@angular/forms"
import { RouterModule } from "@angular/router"

import { MDBBootstrapModules } from 'ng-mdb-pro';
import {routes} from './auth-routing';
import { StoreModule } from "@ngrx/store";
import { userReducer } from "../../store/reducers/user-reducers/user.reducer";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    MDBBootstrapModules,
    StoreModule.forFeature('user', userReducer)
  ],
  declarations: [
    ...authenticationComponents
  ],
  exports: [
    ...authenticationComponents
  ],
  providers: [],
})

export class AuthenticationModule {

}
