import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { AddPrescriptionComponent } from './add-prescription/add-prescription.component';

import { DoctorLeaveComponent } from './doctor-leave/doctor-leave.component';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';
import { LoginComponent } from './login/login.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { UpdateAvailComponent } from './update-avail/update-avail.component';

const routes: Routes = [
{path:'login',component:LoginComponent},

{path:'addp',component:AddPrescriptionComponent},
{path:'patientDetail',component:PatientDetailsComponent},
{path:'doctorProfile',component:DoctorProfileComponent},
{path:'leave',component:DoctorLeaveComponent},
{path:'addDoctor',component:AddDoctorComponent},
{path:'upAvail',component:UpdateAvailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
