import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { firstCmpComponent } from './firstCmp/firstcmp.component';
import { testCmpComponent } from './test-cmp/test-cmp.component';

@NgModule({
  declarations: [
    AppComponent,
    NewCmpComponent,
    firstCmpComponent,
    testCmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
