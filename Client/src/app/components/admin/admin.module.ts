import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { FormsModule } from "@angular/forms"
import { RouterModule } from "@angular/router"

import {routes} from './admin-routing';

import { adminComponents } from "./index";

import { MDBBootstrapModules } from 'ng-mdb-pro';
import { StoreModule } from "@ngrx/store";
import { userReducer } from "../../store/reducers/user-reducers/user.reducer";
import { adminReducer } from "../../store/reducers/admin-reducer/admin.reducer";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    MDBBootstrapModules,
    
     StoreModule.forFeature('admin', adminReducer)
  ],
  declarations: [
    ...adminComponents,
    
  ],
  exports: [
    ...adminComponents,
  ],
  providers: [],
})

export class AdminModule {

}
