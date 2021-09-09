import { PatientComponent } from './patient/patient.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { AddPrescriptionComponent } from './add-prescription/add-prescription.component';
import { AddReceptionistComponent } from './add-receptionist/add-receptionist.component';
import { AdminheaderComponent } from './admin/adminheader/adminheader.component';
//import { AllrequestComponent } from './allrequest/allrequest.component';
import { AppointmentstatusComponent } from './appointmentstatus/appointmentstatus.component';

import { DoctorLeaveComponent } from './doctor-leave/doctor-leave.component';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';
import { DoctorStatusComponent } from './doctor-status/doctor-status.component';
import { DocheaderComponent } from './doctor/docheader/docheader.component';
import { GeneratingreportComponent } from './generatingreport/generatingreport.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { RecepheaderComponent } from './receptionist/recepheader/recepheader.component';
import { UpdateAvailComponent } from './update-avail/update-avail.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
{path:'login',component:LoginComponent},
{path:'login/upProfile',component:UpdateProfileComponent},
{path:'login/upPassword',component:UpdatePasswordComponent},
{path:'login/addp',component:AddPrescriptionComponent},
{path:'login/patientDetail',component:PatientDetailsComponent},
{path:'login/doctorProfile',component:DoctorProfileComponent},
{path:'login/leave',component:DoctorLeaveComponent},
{path:'login/addDoctor',component:AddDoctorComponent},
{path:'login/upAvail',component:UpdateAvailComponent},
{path:'login/addr',component:AddReceptionistComponent},
{path:'login/logout',component:LogoutComponent},
{path:'login/header',component:DocheaderComponent},
{path:'login/aheader',component:AdminheaderComponent},
{path:'login/rheader',component:RecepheaderComponent},
{path:'login/doctorstatus',component:DoctorStatusComponent},
{path:'login/generatingreport',component:GeneratingreportComponent},
{path:'login/appointment',component:AppointmentstatusComponent},
{path:'login/patheader',component:PatientComponent}
// {path: 'login/appointment/allrequest',component:AllrequestComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
