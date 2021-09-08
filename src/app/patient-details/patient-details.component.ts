import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    let res= this.http.get("http://localhost:9091/appointment/patient/"+2+"/getappointment");
    res.subscribe((data)=>console.log(data));
  }

}
