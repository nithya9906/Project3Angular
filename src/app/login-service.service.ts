import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Logins } from './loginDetail';
import { Status } from './Status';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http:HttpClient) { }


  public userlogin(l:any):Observable<Status>{
    return this.http.post<Status>("http://13.127.153.216:9090/loginController/login",l);
  }
}
