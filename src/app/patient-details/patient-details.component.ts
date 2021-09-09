import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentService } from '../appointment.service';
import { CommonUserServiceService } from '../common-user-service.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css'],
})
export class PatientDetailsComponent implements OnInit {
  value: any;
  constructor(
   
    private comService: CommonUserServiceService,
    private router: Router,private http:HttpClient
  ) {}
  // private appservice: AppointmentService,

  ngOnInit(): void {
    let docid=this.comService.getUserLoggedIn();
    console.log("Doctorid:"+docid);
    let res= this.http.get("http://13.127.153.216:9090/appointment/getcurrentPatient/"+docid);
    res.subscribe((data)=>console.log(data));
    res.subscribe((data)=>this.value=data);
    // let docid = this.comService.getUserLoggedIn();
    // console.log('Doctorid:' + docid);
    // this.value = this.appservice.getAppointment;
  }

  goPrescription() {
    this.router.navigate(['login', 'addp']);
  }
}
