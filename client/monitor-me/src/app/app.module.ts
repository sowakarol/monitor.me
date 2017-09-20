import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SelfRegistrationFormComponent } from './self-registration-form/self-registration-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SelfRegistrationFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
