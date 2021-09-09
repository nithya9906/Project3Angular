import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentService } from '../appointment.service';
import { CommonUserServiceService } from '../common-user-service.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css'],
})
export class PatientDetailsComponent implements OnInit {
  value: any;
  constructor(
    private appservice: AppointmentService,
    private comService: CommonUserServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    let docid = this.comService.getUserLoggedIn();
    console.log('Doctorid:' + docid);
    this.value = this.appservice.getAppointment;
  }

  goPrescription() {
    this.router.navigate(['login', 'addp']);
  }
}
