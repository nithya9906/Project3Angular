import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from './Doctor';
import { Receptionist } from './Receptionist';


@Injectable({
  providedIn: 'root'
})
export class DoctorServiceService {
doc:Doctor=new Doctor();
  constructor(private http:HttpClient) { }



  public addDoctor(l:any):Observable<Doctor>{
    return this.http.post<Doctor>("http://13.127.153.216:9090/doctorController/addDoctor",l);
  }

  public addReceptionist(r:any):Observable<Receptionist>{
    return this.http.post<Receptionist>("http://13.127.153.216:9090/receptionistController/addReceptionist",r);
  }
}
