import { LeaveStatus } from './../LeaveStatus';
import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-doctor-status',
  templateUrl: './doctor-status.component.html',
  styleUrls: ['./doctor-status.component.css']
})
export class DoctorStatusComponent implements OnInit {

  leaveStatus: LeaveStatus | any;
  headers=["LeaveId","DoctorId","Leave Date","Leave Status","Cancel Appointments"];

  // private int leaveId;
	// private int doctorId;
	// @DateTimeFormat(pattern = "yyyy-MM-dd")
	// private Date leaveDate;
	// private String Status;



  constructor(private aservice:AppointmentService) { }

  ngOnInit(): void {
  }

  leavecancel(){
    let resp=this.aservice.doctorStatus()
    resp.subscribe((data)=>{console.log(data);
      this.leaveStatus=data}) 
}

confirmLeave(leaveStatus : any){
  this.aservice.confirmleave(leaveStatus);

}

}
