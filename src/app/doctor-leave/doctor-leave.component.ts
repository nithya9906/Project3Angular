import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonUserServiceService } from '../common-user-service.service';
import { DoctorLeave } from '../DoctorLeave';

@Component({
  selector: 'app-doctor-leave',
  templateUrl: './doctor-leave.component.html',
  styleUrls: ['./doctor-leave.component.css']
})
export class DoctorLeaveComponent implements OnInit {

  constructor(private comService:CommonUserServiceService,private http:HttpClient) { }
docleave:DoctorLeave=new DoctorLeave();
  ngOnInit(): void {
  }

  applyLeave(  )
  {
    console.log(this.docleave.leaveDate);
    this.docleave.doctorId=this.comService.getUserLoggedIn();
    let res= this.http.post("http://localhost:9091/doctorController/bookleave",this.docleave);
    res.subscribe((data)=>console.log(data)); 
    alert("Leave Updated");

  }

}
