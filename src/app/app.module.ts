import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BpNavbarComponent } from './components/homepage/bp-navbar/bp-navbar.component';
import { HomeComponent } from './components/homepage/home/home.component';
import { LoginComponent } from './components/homepage/login/login.component';
import { SigninComponent } from './components/homepage/signin/signin.component';

import { FormsModule } from '@angular/forms';
import { MapComponent } from './components/homepage/map/map.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ParcellesComponent } from './components/homepage/parcelles/parcelles.component';
import { LogoutComponent } from './components/homepage/logout/logout.component';
import { BpFooterComponent } from './components/homepage/bp-footer/bp-footer.component';
import { HttpIntercepterBasicAuthService } from './services/Http/http-intercepter-basic-auth.service';
import { ErrorComponent } from './components/homepage/error/error.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { AddParcelleComponent } from './components/admin/add-parcelle/add-parcelle.component';
import { AddBulletinOfficielComponent } from './components/admin/add-bulletin-officiel/add-bulletin-officiel.component';
import { BulletinOfficielComponent } from './components/homepage/bulletin-officiel/bulletin-officiel.component';
import { ModifieBulletinOfficielComponent } from './components/admin/modifie-bulletin-officiel/modifie-bulletin-officiel.component';
import { ProvinceCommuneComponent } from './components/province-commune/province-commune.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

@NgModule({
  declarations: [
    AppComponent,
    BpNavbarComponent,
    HomeComponent,
    LoginComponent,
    SigninComponent,
    MapComponent,
    ParcellesComponent,
    LogoutComponent,
    BpFooterComponent,
    ErrorComponent,
    DashboardComponent,
    AddParcelleComponent,
    AddBulletinOfficielComponent,
    BulletinOfficielComponent,
    ModifieBulletinOfficielComponent,
    ProvinceCommuneComponent
  ],
  imports: [
    LeafletModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'signin', component: SigninComponent },
      { path: 'map', component: MapComponent },
      { path: 'parcelles', component: ParcellesComponent },
      { path: 'logout', component: LogoutComponent },
      { path: 'addParcelle', component: AddParcelleComponent }
    ])
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpIntercepterBasicAuthService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
