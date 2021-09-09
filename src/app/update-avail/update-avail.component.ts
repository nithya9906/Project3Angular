import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonUserServiceService } from '../common-user-service.service';
import { Doctor } from '../Doctor';

@Component({
  selector: 'app-update-avail',
  templateUrl: './update-avail.component.html',
  styleUrls: ['./update-avail.component.css']
})
export class UpdateAvailComponent implements OnInit {
b:any
doc:Doctor=new Doctor()

  constructor(private http:HttpClient,private comService:CommonUserServiceService) { }

  ngOnInit(): void {
    let id=this.comService.getUserLoggedIn();
   let res= this.http.get("http://13.127.153.216:9090/doctorController/doctorById/"+id);
    res.subscribe((data)=>this.b=data); 
  }
  register(){
    let id=this.comService.getUserLoggedIn();
    let res= this.http.put("http://localhost:9091/doctorController/updateDoctor",this.b);
     res.subscribe((data)=>this.b=data); 
     alert("Updated");
  }
}
