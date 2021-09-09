import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Doctor } from './Doctor';
import { Family } from './Family';

import { Patient } from './Patient';

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
    const baseUrl = `http://13.127.153.216:9090/patient/${id}`;
    return this._http.get<Patient>(baseUrl);
  }

  getAllDoctors(): Observable<Doctor> {
    const baseUrl = 'http://13.127.153.216:9090/doctorController/doctors';
    return this._http.get<Doctor>(baseUrl);
  }
  addFamilymembers(member: any, pid: number): Observable<Family> {
    const baseUrl = `http://13.127.153.216:9090/patient/${pid}/family/addmember`;
    return this._http.post<Family>(baseUrl, member);
  }
  getFamilyMembers(pid: number): Observable<Patient> {
    const baseUrl = `http://13.127.153.216:9090/patient/${pid}`;
    return this._http.get<Patient>(baseUrl);
  }
  updatePatient(pid: number, patient: any): Observable<Patient> {
    const baseUrl = `http://13.127.153.216:9090/update/patient/${pid}`;
    return this._http.put<Patient>(baseUrl, patient);
  }
}
