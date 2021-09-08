import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from './Doctor';


@Injectable({
  providedIn: 'root'
})
export class DoctorServiceService {
doc:Doctor=new Doctor();
  constructor(private http:HttpClient) { }



  public addDoctor(l:any):Observable<Doctor>{
    return this.http.post<Doctor>("http://localhost:9091/doctorController/addDoctor",l);
  }
}
