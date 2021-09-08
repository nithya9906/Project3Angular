import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { Family } from '../family';
import { Appointment } from '../appointment';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css'],
})
export class PatientComponent implements OnInit {
  apptDate: Date | any;
  purpose = '';
  category = '';
  appointment: Appointment | any;
  patientFamily = 'patient1';
  members: Family | any = [];
  familyid: number | any;
  constructor(private _patientservice: PatientService) {}

  patient: Patient | any;
  tabs = new Map<string, string>([
    ['dashboard', 'Dashboard'],
    ['add', 'Add members'],
    ['viewmembers', 'View members'],
    ['remove', 'Remove members'],
    ['book', 'Book Appointment'],
    ['view', 'View Appointment'],
  ]);
  selectedTab = 'dashboard';
  defaultOrderFn = () => 0;

  ngOnInit() {
    this._patientservice.getPatientById(1).subscribe((data) => {
      this.patient = data;
      console.log(data);
    });
  }
  changeTab(key: string) {
    this.selectedTab = key;
  }

  submitForm() {
    // const sendPatient=this.patient.members.filter(e => e.family_id===this.familyid);
    // console.log(sendPatient);
    console.log(this.apptDate + ' ' + this.purpose);
    const appointmentData = {
      applicationDate: this.apptDate,
      purpose: this.purpose,
    };
    this.appointment = this._patientservice
      .sendPatientDetails(appointmentData, this.patient.p_id)
      .subscribe();
  }
  // viewAppointments() {
  //   console.log(this.appointment);
  // }
}
