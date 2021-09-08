import { LeaveStatus } from './../../../receptionistFrontEnd/src/app/LeaveStatus';
import { AppointmentCancel } from './../../../receptionistFrontEnd/src/app/AppointmentCancel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from './appointment';
import { Prescription } from './Prescription';
import { DaywiseData } from './DaywiseData';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  constructor(private http: HttpClient) {}

  bookAppointment(appointment: any, pid: number): Observable<Appointment> {
    const baseUrl = `http://localhost:9091/appointment/book/${pid}`;

    return this.http.post<Appointment>(baseUrl, appointment);
  }

  bookAppointmentforFamily(
    appointment: any,
    pid: number,
    fid: number
  ): Observable<Appointment> {
    const baseUrl = `http://localhost:9091/appointment/book/${pid}/${fid}`;

    return this.http.post<Appointment>(baseUrl, appointment);
  }
  getAppointments(pid: number): Observable<Appointment> {
    const baseUrl = `http://localhost:9091/appointment/patient/${pid}/getappointment`;
    return this.http.get<Appointment>(baseUrl);
  }
  
generateappointment(date : Date ): Observable<Appointment>{

  return this.http.get<Appointment>(`http://localhost:9091/appointment/getappointmentbydate/?date=${date}`);

}

generateReport(date : any): Observable<DaywiseData>{
  return this.http.post<DaywiseData>("http://localhost:9091/receptionistController/gettotalNumbers",date);
 }


cancelappointment(pid : number,appointmentObj: AppointmentCancel):  Observable<Appointment>{
  return this.http.post<Appointment>(`http://localhost:9091/receptionistController/cancelAppointment/${pid}`,appointmentObj);
  
}

doctorStatus(): Observable<LeaveStatus>{
  return this.http.get<LeaveStatus>("http://localhost:9091/doctorController/getallLeaves");
}

confirmappointment(pid : number,appointmentObj: AppointmentCancel): Observable<Appointment>{
return this.http.post<Appointment>(`http://localhost:9091/receptionistController/confirmAppointment/${pid}`,appointmentObj);

}

goingin(pid : number,appointmentObj: AppointmentCancel): Observable<Appointment>{
  return this.http.post<Appointment>(`http://localhost:9091/receptionistController/consultingnow/${pid}`,appointmentObj);
  
}

confirmleave(leaveObj: LeaveStatus){
  this.http.post(`http://localhost:9091/receptionistController/cancelforoneDoctor`,leaveObj).subscribe();
}

generatePrescription(appointmentObj: AppointmentCancel): Observable<Prescription>{
  return this.http.post<Prescription>("http://localhost:9091/getPrescriptionsByAppId",appointmentObj);
}

}

