import { NgModule } from '@angular/core'
import {TimeAgoPipe} from 'time-ago-pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SatPopoverModule } from '@ncstate/sat-popover';


import { AuthenticationModule } from '../auth/auth.module';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
  ],
  declarations: [
    TimeAgoPipe
  ],
  exports: [
    TimeAgoPipe
  ],
  providers: []
})

export class TimeAgoModule {
}
