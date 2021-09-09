import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonUserServiceService } from '../common-user-service.service';
import { DoctorLeave } from '../DoctorLeave';
import { DatePipe } from '@angular/common'

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
    var d = new Date(this.docleave.leaveDate);
  //  console.log(d);
  var cd=new Date();

    console.log(d.getDate());
    console.log(cd.getDate());
  //  console.log(this.docleave.leaveDate);
    
   // console.log(this.datepipe.transform(this.docleave.leaveDate),'dd' );
   // console.log('Date now', Date.now().toLocaleString())
    if(d.getDate()<= cd.setDate(cd.getDate()+10)){
      
      console.log(d.getDay());
    this.docleave.doctorId=this.comService.getUserLoggedIn();
    let res= this.http.post("http://13.127.153.216:9090/doctorController/bookleave",this.docleave);
    res.subscribe((data)=>console.log(data)); 
    alert("Leave Updated");
    }
    else 
      alert('Try again');
  }

}
