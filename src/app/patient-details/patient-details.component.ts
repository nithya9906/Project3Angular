import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonUserServiceService } from '../common-user-service.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {
value:any;
  constructor(private http:HttpClient,private comService:CommonUserServiceService,private router:Router) { }

  ngOnInit(): void {
    let docid=this.comService.getUserLoggedIn();
    console.log("Doctorid:"+docid);
    let res= this.http.get("http://localhost:9091/appointment/getcurrentPatient/"+docid);
    res.subscribe((data)=>console.log(data));
    res.subscribe((data)=>this.value=data);
  }

  goPrescription()
  {
    this.router.navigate(['login','addp']);
  }

}
