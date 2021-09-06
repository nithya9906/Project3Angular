import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllLoginComponent } from './all-login/all-login.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
{path:'login',component:LoginComponent},
{path:'alogin',component:AllLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
