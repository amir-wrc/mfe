import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { loadRemoteModule } from '@angular-architects/module-federation-runtime';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    loadRemoteModule({
      remoteName: 'shellApp',
      exposedModule: './SharedServices',
      remoteEntry: 'http://localhost:4200/remoteEntry.js'
    }).then(m => m.SharedServicesModule)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
