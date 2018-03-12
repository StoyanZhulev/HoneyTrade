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

import { SatPopoverModule } from '@ncstate/sat-popover';

import {TimeAgoPipe} from 'time-ago-pipe';
import { TimeAgoModule } from "../time-ago/time-ago.module";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SatPopoverModule,
    RouterModule.forChild(routes),
    MDBBootstrapModules,
    TimeAgoModule,
     StoreModule.forFeature('admin', adminReducer)
  ],
  declarations: [
    ...adminComponents
    
  ],
  exports: [
    ...adminComponents,
  ],
  providers: [],
})

export class AdminModule {

}
