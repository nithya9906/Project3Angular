import { AppointmentService } from './../appointment.service';
import { DaywiseData } from './../DaywiseData';
import { Component, OnInit } from '@angular/core';
import { DateFetch } from '../DateFetch';


@Component({
  selector: 'app-generatingreport',
  templateUrl: './generatingreport.component.html',
  styleUrls: ['./generatingreport.component.css']
})
export class GeneratingreportComponent implements OnInit {
  date1: DateFetch = new DateFetch();
  daywiseDataObj: DaywiseData | any;
  headers=["Date","Doctor Id","Doctor Name","Number of patients","Total Amount"];

 

  // this.datedate={"appointmentDate":this.date1};
  //   const date=this.date1;
  //   // this.router.navigate(['/appointment/allrequest'])
  //   console.log(date1);
  //   const resp=this.appservice.generateappointment(date)
  //   resp.subscribe((data)=>{console.log(data) 
  //   this.value=data})
   

  constructor(private aservice:AppointmentService) { }

  ngOnInit(): void {
  }
  generatereport(){
    let resp=this.aservice.generateReport(this.date1)
    resp.subscribe((data)=>{console.log(data);
      this.daywiseDataObj=data}) 
}
}
