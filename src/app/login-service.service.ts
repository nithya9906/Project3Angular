import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Logins } from './loginDetail';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http:HttpClient) { }


  public userlogin(l:Logins){
    return this.http.post("http://localhost:9091/loginController/login",l,{responseType: 'text' as 'json'});
  }
}
