import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { AddPrescriptionComponent } from './add-prescription/add-prescription.component';
import { AddReceptionistComponent } from './add-receptionist/add-receptionist.component';

import { DoctorLeaveComponent } from './doctor-leave/doctor-leave.component';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';
import { DocheaderComponent } from './doctor/docheader/docheader.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { UpdateAvailComponent } from './update-avail/update-avail.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';

const routes: Routes = [
{path:'login',component:LoginComponent},
{path:'upProfile',component:UpdateProfileComponent},
{path:'upPassword',component:UpdatePasswordComponent},
{path:'addp',component:AddPrescriptionComponent},
{path:'patientDetail',component:PatientDetailsComponent},
{path:'doctorProfile',component:DoctorProfileComponent},
{path:'leave',component:DoctorLeaveComponent},
{path:'addDoctor',component:AddDoctorComponent},
{path:'upAvail',component:UpdateAvailComponent},
{path:'addr',component:AddReceptionistComponent},
{path:'logout',component:LogoutComponent},
{path:'header',component:DocheaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
