import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonUserServiceService } from '../common-user-service.service';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent implements OnInit {
value:any;
  constructor(private http:HttpClient,private comService:CommonUserServiceService) { }

  ngOnInit(): void {
    let d=this.comService.getUserLoggedIn();
    let res= this.http.get("http://localhost:9091/doctorController/doctorById/"+d);
    res.subscribe((data)=>this.value=data); 
  }

  updateProfile()
  {
    
  }

}
