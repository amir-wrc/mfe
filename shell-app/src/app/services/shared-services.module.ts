import { NgModule } from '@angular/core';
import { AuthService } from './auth.service';
import { SharedDataService } from './shared-data.service';

@NgModule({
  providers: [AuthService, SharedDataService]
})
export class SharedServicesModule { }