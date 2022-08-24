import { SignUpAmatorComponent } from './components/sign-up-amator/sign-up-amator.component';
import { SignInAmatorComponent } from './components/sign-in-amator/sign-in-amator.component';
import { VeriGirisComponent } from './components/veri-giris/veri-giris.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KvkkEnvanterComponent } from './components/kvkk-envanter/kvkk-envanter.component';

const routes: Routes = [
  { path: 'sign-in', component: SignInAmatorComponent },
  { path: 'sign-up', component: SignUpAmatorComponent },
  { path: 'veri-giris', component: VeriGirisComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'kvkk-envanter', component: KvkkEnvanterComponent },
  { path: '',   redirectTo: '/veri-giris', pathMatch: 'full' }, // redirect to `first-component`

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
