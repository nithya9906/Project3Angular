import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';

import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';

import { AddPrescriptionComponent } from './add-prescription/add-prescription.component';

import { CommonUserServiceService } from './common-user-service.service';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { DoctorLeaveComponent } from './doctor-leave/doctor-leave.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { DoctorServiceService } from './doctor-service.service';
import { UpdateAvailComponent } from './update-avail/update-avail.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { LogoutComponent } from './logout/logout.component';
import { AddReceptionistComponent } from './add-receptionist/add-receptionist.component';
import { DocheaderComponent } from './doctor/docheader/docheader.component';
import { AdminheaderComponent } from './admin/adminheader/adminheader.component';
import { RecepheaderComponent } from './receptionist/recepheader/recepheader.component';
import { AppointmentstatusComponent } from './appointmentstatus/appointmentstatus.component';
import { GeneratingreportComponent } from './generatingreport/generatingreport.component';
import { DoctorStatusComponent } from './doctor-status/doctor-status.component';
import { PatientComponent } from './patient/patient.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DoctorProfileComponent,
      DoctorStatusComponent,
       AddPrescriptionComponent,
       PatientDetailsComponent,
       DoctorLeaveComponent,
       AddDoctorComponent,
       UpdateAvailComponent,
       UpdateProfileComponent,
       UpdatePasswordComponent,
       LogoutComponent,
       AddReceptionistComponent,
       DocheaderComponent,
       AdminheaderComponent,
       RecepheaderComponent,
       GeneratingreportComponent,
       AppointmentstatusComponent,
       PatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [CommonUserServiceService, DoctorServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
