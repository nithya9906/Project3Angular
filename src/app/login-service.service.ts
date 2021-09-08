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
    return this.http.post<Status>("http://localhost:9091/loginController/login",l);
  }
}
