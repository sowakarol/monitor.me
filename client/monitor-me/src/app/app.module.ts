import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SelfRegistrationFormComponent } from './self-registration-form/self-registration-form.component';
import { ForgotMyPasswordButtonComponent } from './self-registration-form/forgot-my-password-button/forgot-my-password-button.component';

@NgModule({
  declarations: [
    AppComponent,
    SelfRegistrationFormComponent,
    ForgotMyPasswordButtonComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
