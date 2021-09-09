import { CommonUserServiceService } from './../common-user-service.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { PatientService } from '../patient.service';

import { Doctor } from '../Doctor';


import { AppointmentService } from '../appointment.service';
import { Appointment } from '../Appointment';
import { Family } from '../Family';
import { Patient } from '../Patient';


@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css'],
})
export class PatientComponent implements OnInit {
  private doctors: Doctor[] = [];
  apptDate: Date | any;
  purpose = '';
  category = 'generalist';
  // bookappointment: Appointment | any;
  appointment: Appointment | any = [];
  patientFamily = 'patient1';
  members: Family | any;
  categoryDoctors: Doctor[] = [];
  selectedDoctorId = -1;
  selectedFamilyId = -1;
  patient: Patient | any;
  getPatient: Patient | any;
  firstName = '';
  lastName = '';
  age: number | any;
  mobileNo = '';
  address = '';
  email = '';
  updateBtn = '';

  constructor(
    private _patientservice: PatientService,
    private _appointmentService: AppointmentService,private comService:CommonUserServiceService
  ) {}

  tabs = new Map<string, string>([
    ['dashboard', 'Dashboard'],
    ['add', 'Add members'],
    ['viewmembers', 'View members'],
    ['book', 'Book Appointment'],
    ['view', 'View Appointment'],
  ]);
  selectedTab = 'dashboard';
  defaultOrderFn = () => 0;

  ngOnInit() {
    let d=this.comService.getUserLoggedIn();
    this._patientservice.getPatientById(d).subscribe((data) => {
      this.patient = data;
      this._patientservice.getAllDoctors().subscribe((data: any) => {
        this.doctors = data;
      });
    });
  }

  changeTab(key: string) {
    this.selectedTab = key;
    if (this.selectedTab === 'view') {
      this.viewAppointments(this.patient.p_id);
      // console.log(this.appointment);
    }
    if (this.selectedTab === 'viewmembers') {
      this.viewMembers(this.patient.p_id);
    }
  }

  updateCategory(value: string) {
    this.category = value;
    this.categoryDoctors = this.doctors.filter((e: any) => {
      console.log(this.category);
      return e.designation.toLowerCase() === this.category.toLowerCase();
    });
  }

  submitForm() {
    let appointmentData = {};
    if (this.selectedFamilyId > -1) {
      console.log(this.selectedFamilyId);
      appointmentData = {
        applicationDate: this.apptDate,
        purpose: this.purpose,
        availability: 'pending',
        doctor: { doctorId: this.selectedDoctorId },
        family: { family_id: this.selectedFamilyId },
      };
      this._appointmentService
        .bookAppointmentforFamily(
          appointmentData,
          this.patient.p_id,
          this.selectedFamilyId
        )
        .subscribe();
    } else {
      appointmentData = {
        applicationDate: this.apptDate,
        purpose: this.purpose,
        availability: 'pending',
        doctor: { doctorId: this.selectedDoctorId },
      };
      this._appointmentService
        .bookAppointment(appointmentData, this.patient.p_id)
        .subscribe();
    }
  }

  addFamilyMembers() {
    const member = {
      firstName: this.firstName,
      lastName: this.lastName,
      age: this.age,
      mobileNo: this.mobileNo,
      address: this.address,
      email: this.email,
    };
    this._patientservice
      .addFamilymembers(member, this.patient.p_id)
      .subscribe();
  }
  viewMembers(id: number) {
    this._patientservice
      .getFamilyMembers(id)
      .subscribe((data) => (this.members = data.members));
  }
  viewAppointments(id: number) {
    this._appointmentService.getAppointments(id).subscribe((data) => {
      this.appointment = data;
      console.log(data);
    });
  }
  updatePatient() {
    const updateData = {
      firstName: this.firstName,
      lastName: this.lastName,
      age: this.age,
      mobileNo: this.mobileNo,
      address: this.address,
      email: this.email,
    };
    this._patientservice
      .updatePatient(this.patient.p_id, updateData)
      .subscribe();
    this.updateBtn = '';
  }
}
