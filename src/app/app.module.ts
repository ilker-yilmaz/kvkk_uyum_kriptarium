import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';
import { SignInAuth0Component } from './components/sign-in-auth0/sign-in-auth0.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { SignInAmatorComponent } from './components/sign-in-amator/sign-in-amator.component';
import { SignUpAmatorComponent } from './components/sign-up-amator/sign-up-amator.component';
import { KvkkEnvanterComponent } from './components/kvkk-envanter/kvkk-envanter.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInAuth0Component,
    UserProfileComponent,
    SignInAmatorComponent,
    SignUpAmatorComponent,
    KvkkEnvanterComponent
  ],
  imports: [
    BrowserModule,
    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: 'ilker-blog.us.auth0.com',
      clientId: 'KM6xbU0dbnkcBFAnqABqU9DWDMe3TAzz'
    }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
