import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonUserServiceService } from '../common-user-service.service';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent implements OnInit {
value:any;
  constructor(private http:HttpClient,private comService:CommonUserServiceService,private router:Router) { }

  ngOnInit(): void {
    let d=this.comService.getUserLoggedIn();
    let res= this.http.get("http://13.127.153.216:9090/doctorController/doctorById/"+d);
    res.subscribe((data)=>this.value=data); 
  }

  updateProfile()
  {
   this.router.navigate(['login','upProfile']); 
  }
  updatePassword(){
    this.router.navigate(['login','upPassword']); 
  }

}
