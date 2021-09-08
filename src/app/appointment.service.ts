import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from './appointment';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  constructor(private _http: HttpClient) {}

  bookAppointment(appointment: any, pid: number): Observable<Appointment> {
    const baseUrl = `http://localhost:9091/appointment/book/${pid}`;

    return this._http.post<Appointment>(baseUrl, appointment);
  }

  bookAppointmentforFamily(
    appointment: any,
    pid: number,
    fid: number
  ): Observable<Appointment> {
    const baseUrl = `http://localhost:9091/appointment/book/${pid}/${fid}`;

    return this._http.post<Appointment>(baseUrl, appointment);
  }
  getAppointments(pid: number): Observable<Appointment> {
    const baseUrl = `http://localhost:9091/appointment/patient/${pid}/getappointment`;
    return this._http.get<Appointment>(baseUrl);
  }
}
