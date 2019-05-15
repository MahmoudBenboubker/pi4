import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './components/homepage/signin/signin.component';
import { LoginComponent } from './components/homepage/login/login.component';
import { HomeComponent } from './components/homepage/home/home.component';
import { MapComponent } from './components/homepage/map/map.component';
import { ParcellesComponent } from './components/homepage/parcelles/parcelles.component';
import { ErrorComponent } from './components/homepage/error/error.component';
import { LogoutComponent } from './components/homepage/logout/logout.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { AddParcelleComponent } from './components/admin/add-parcelle/add-parcelle.component';
import { AddBulletinOfficielComponent } from './components/admin/add-bulletin-officiel/add-bulletin-officiel.component';
import { BulletinOfficielComponent } from './components/homepage/bulletin-officiel/bulletin-officiel.component';
import { ModifieBulletinOfficielComponent } from './components/admin/modifie-bulletin-officiel/modifie-bulletin-officiel.component';

const routes: Routes = [

  { path : '', component : HomeComponent},
  { path : 'login', component : LoginComponent},
  { path : 'signin', component : SigninComponent},
  { path : 'home', component : HomeComponent},
  { path : 'map', component : MapComponent},
  { path : 'parcelles', component : ParcellesComponent},
  { path : 'bulletinofficiels', component : BulletinOfficielComponent},
  { path : 'logout', component : LogoutComponent},
  { path : 'dashboard', component : DashboardComponent},
  {path: 'addParcelle', component: AddParcelleComponent},
  {path: 'addBo', component: AddBulletinOfficielComponent},
  {path: 'modifier/:numBo', component: ModifieBulletinOfficielComponent},
  
  { path : '**', component : ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
