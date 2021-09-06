import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';

import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';
import { AllLoginComponent } from './all-login/all-login.component';

@NgModule({
  declarations: [
    AppComponent,
   
    LoginComponent,
  
    DoctorProfileComponent,
       AllLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
