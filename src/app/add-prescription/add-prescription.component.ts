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
  p:Prescription=new Prescription()
  constructor(private comService:CommonUserServiceService,private http:HttpClient) {
    
   // comService.setUserLoggedIn(14)
    this.p.doctorId=comService.getUserLoggedIn()
   }

  ngOnInit(): void {
  }
  
  submit(){
   
    console.log(this.p);
    let res= this.http.post("http://localhost:9091/PrepController/addPrescription",this.p);
    res.subscribe((data)=>this.d=data); 
  //  let res1= this.http.post("http://localhost:9091/PrepController/addPrescription",this.p);
   // res.subscribe((data1)=>console.log(data1)); 
    if(this.d==null)
    {
      alert("Not Submitted");
    }
    else{
      alert(" Submitted");
    }
   
    //res.subscribe((data)=>this.data1=data); 
  }
  complete(){
    let res1= this.http.post("http://localhost:9091/receptionistController/"+this.p.patientId+"/"+this.p.doctorFees,this.p);
    res1.subscribe((data1)=>console.log(data1)); 
  }

}
