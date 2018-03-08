import { NgModule } from "@angular/core"
import { authenticationComponents } from "./index"
import { CommonModule } from "@angular/common"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { RouterModule } from "@angular/router"

import { MDBBootstrapModules } from 'ng-mdb-pro';
import {routes} from './auth-routing';
import { StoreModule } from "@ngrx/store";
import { userReducer } from "../../store/reducers/user-reducers/user.reducer";
import { UserRegisterComponent } from './register/user-register/user-register.component';
import { BeekeeperRegisterComponent } from './register/beekeeper-register/beekeeper-register.component';
import { BuyerRegisterComponent } from './register/buyer-register/buyer-register.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    MDBBootstrapModules,
    StoreModule.forFeature('user', userReducer)
  ],
  declarations: [
    ...authenticationComponents,
    UserRegisterComponent,
    BeekeeperRegisterComponent,
    BuyerRegisterComponent
  ],
  exports: [
    ...authenticationComponents
  ],
  providers: [],
})

export class AuthenticationModule {

}
