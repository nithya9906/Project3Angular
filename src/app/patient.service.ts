import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from './appointment';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  constructor(private _http: HttpClient) {}
  // httpOptions = {
  //   Headers: new HttpHeaders({
  //     'Content-type': 'application/json',
  //   }),
  // };

  getPatientById(id: number): Observable<Patient> {
    const baseUrl = `http://localhost:9091/patient/${id}`;
    return this._http.get<Patient>(baseUrl);
  }

  sendPatientDetails(appointment: any, pid: number): Observable<Appointment> {
    const baseUrl = `http://localhost:9091/appointment/book/${pid}`;
    console.log('Posting');
    return this._http.post<Appointment>(baseUrl, appointment);
  }
}
