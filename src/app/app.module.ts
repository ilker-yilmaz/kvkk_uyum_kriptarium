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
import { VeriGirisComponent } from './components/veri-giris/veri-giris.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarMenuComponent } from './components/sidebar-menu/sidebar-menu.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInAuth0Component,
    UserProfileComponent,
    SignInAmatorComponent,
    SignUpAmatorComponent,
    KvkkEnvanterComponent,
    VeriGirisComponent,
    NavbarComponent,
    SidebarMenuComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: 'ilker-blog.us.auth0.com',
      clientId: 'KM6xbU0dbnkcBFAnqABqU9DWDMe3TAzz'
    }),
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
