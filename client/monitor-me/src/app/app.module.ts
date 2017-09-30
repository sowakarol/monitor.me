import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SelfRegistrationFormComponent } from './self-registration-form/self-registration-form.component';
import { ForgotMyPasswordButtonComponent } from './self-registration-form/forgot-my-password-button/forgot-my-password-button.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { FriendListComponent } from './side-bar/friend-list/friend-list.component';


@NgModule({
  declarations: [
    AppComponent,
    SelfRegistrationFormComponent,
    ForgotMyPasswordButtonComponent,
    TopBarComponent,
    SideBarComponent,
    FriendListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
