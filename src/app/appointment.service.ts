import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Prescription } from './Prescription';
import { DaywiseData } from './DaywiseData';
import { LeaveStatus } from './LeaveStatus';
import { AppointmentCancel } from './AppointmentCancel';
import { Appointment } from './Appointment';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  getAppointment: Appointment | any;
  constructor(private http: HttpClient) {}

  bookAppointment(appointment: any, pid: number): Observable<Appointment> {
    const baseUrl = `http://13.127.153.216:9090/appointment/book/${pid}`;

    return this.http.post<Appointment>(baseUrl, appointment);
  }

  bookAppointmentforFamily(
    appointment: any,
    pid: number,
    fid: number
  ): Observable<Appointment> {
    const baseUrl = `http://13.127.153.216:9090/appointment/bookforFamily/${pid}/${fid}`;

    return this.http.post<Appointment>(baseUrl, appointment);
  }
  getAppointments(pid: number): Observable<Appointment> {
    const baseUrl = `http://13.127.153.216:9090/appointment/patient/${pid}/getappointment`;
    return this.http.get<Appointment>(baseUrl);
  }

  generateappointment(date: Date): Observable<Appointment> {
    return this.http.get<Appointment>(
      `http://13.127.153.216:9090/appointment/getappointmentbydate/?date=${date}`
    );
  }

  generateReport(date: any): Observable<DaywiseData> {
    return this.http.post<DaywiseData>(
      'http://13.127.153.216:9090/receptionistController/gettotalNumbers',
      date
    );
  }

  cancelappointment(
    pid: number,
    appointmentObj: AppointmentCancel
  ): Observable<Appointment> {
    return this.http.post<Appointment>(
      `http://13.127.153.216:9090/receptionistController/cancelAppointment/${pid}`,
      appointmentObj
    );
  }

  doctorStatus(): Observable<LeaveStatus> {
    return this.http.get<LeaveStatus>(
      'http://13.127.153.216:9090/doctorController/getallLeaves'
    );
  }

  confirmappointment(
    pid: number,
    appointmentObj: AppointmentCancel
  ): Observable<Appointment> {
    this.getAppointment = this.http.post<Appointment>(
      `http://13.127.153.216:9090/receptionistController/confirmAppointment/${pid}`,
      appointmentObj
    );
    return this.getAppointment;
  }

  goingin(
    pid: number,
    appointmentObj: AppointmentCancel
  ): Observable<Appointment> {
    return this.http.post<Appointment>(
      `http://13.127.153.216:9090/receptionistController/consultingnow/${pid}`,
      appointmentObj
    );
  }

  confirmleave(leaveObj: LeaveStatus) {
    this.http
      .post(
        `http://13.127.153.216:9090/receptionistController/cancelforoneDoctor`,
        leaveObj
      )
      .subscribe();
  }

  generatePrescription(
    appointmentObj: AppointmentCancel
  ): Observable<Prescription> {
    return this.http.post<Prescription>(
      'http://13.127.153.216:9090/getPrescriptionsByAppId',
      appointmentObj
    );
  }
}
