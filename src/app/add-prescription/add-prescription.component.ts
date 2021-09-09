import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonUserServiceService } from '../common-user-service.service';
import { Prescription } from '../Prescription';

@Component({
  selector: 'app-add-prescription',
  templateUrl: './add-prescription.component.html',
  styleUrls: ['./add-prescription.component.css']
})
export class AddPrescriptionComponent implements OnInit {
  d:any;
  val:any;
  pid:number=0;
  appid:number=0;
  p:Prescription|any={};
  constructor(private comService:CommonUserServiceService,private http:HttpClient) {
    
   // comService.setUserLoggedIn(14)
    this.p.doctorId=comService.getUserLoggedIn()
   }

  ngOnInit(): void {
    let docid=this.comService.getUserLoggedIn();
    console.log("Doctorid:"+docid);
    
    let res= this.http.get("http://localhost:9091/appointment/getcurrentPatient/"+docid);
    res.subscribe((data)=>console.log(data));
    res.subscribe((data)=>
    {
    this.val=data;
    this.pid=this.val.patient.p_id;
   this.appid=this.val.applicationId;
    }
    
    );
    // this.pid=this.val.patient.p_id;
    // this.appid=this.val.applicationId;
    // console.log("PPP"+this.pid);
  }
  
  submit(){
  this.p.patientId=this.pid;
  this.p.appointmentId=this.appid;
  console.log(this.pid,this.appid);
    console.log(this.p);
   
    let res= this.http.post("http://13.127.153.216:9090/addPrescription",this.p);
    res.subscribe((data)=>this.d=data); 
  }
  complete(){

    let res1= this.http.post("http://13.127.153.216:9090/receptionistController/completedAppointment/"+this.p.patientId+"/"+this.p.doctorFees,this.val);
    res1.subscribe((data1)=>console.log(data1)); 
    alert("Appointment completed");


  }

}
