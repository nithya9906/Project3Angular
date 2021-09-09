import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonUserServiceService } from '../common-user-service.service';
import { Doctor } from '../Doctor';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {
value:any;
b:Doctor=new Doctor;
d:any;
  constructor(private comService:CommonUserServiceService,private http:HttpClient) { }

  ngOnInit(): void {
    let d=this.comService.getUserLoggedIn();
    let res= this.http.get("http://13.127.153.216:9090/doctorController/doctorById/"+d);
    res.subscribe((data)=>{
      this.value=data;
      this.b=this.value;

    }); 
  }
 register(){
  let id=this.comService.getUserLoggedIn();
  let res= this.http.put("http://localhost:9091/doctorController/updateDoctor",this.b);
   res.subscribe((data)=>this.d=data); 
 }

}
