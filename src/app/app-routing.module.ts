import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './components/homepage/signin/signin.component';
import { LoginComponent } from './components/homepage/login/login.component';
import { HomeComponent } from './components/homepage/home/home.component';
import { MapComponent } from './components/homepage/map/map.component';
import { ParcellesComponent } from './components/homepage/parcelles/parcelles.component';
import { ErrorComponent } from './components/homepage/error/error.component';
import { LogoutComponent } from './components/homepage/logout/logout.component';

const routes: Routes = [

  { path : '', component : HomeComponent},
  { path : 'login', component : LoginComponent},
  { path : 'signin', component : SigninComponent},
  { path : 'home', component : HomeComponent},
  { path : 'map', component : MapComponent},
  { path : 'parcelles', component : ParcellesComponent},
  { path : 'logout', component : LogoutComponent},




  { path : '**', component : ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
