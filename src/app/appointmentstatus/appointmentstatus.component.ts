import { Prescription } from './../Prescription';
import { AppointmentCancel } from './../AppointmentCancel';
import { AppointmentService } from './../appointment.service';
import { Appointment } from './../appointment';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import pdfMake from 'pdfmake/build/pdfmake';
// import pdfFonts from 'pdfmake/build/vfs_fonts';
// pdfMake.vfs = pdfFonts.pdfMake.vfs; 
const pdfMakeX = require('pdfmake/build/pdfmake.js');
const pdfFontsX = require('pdfmake-unicode/dist/pdfmake-unicode.js');
pdfMakeX.vfs = pdfFontsX.pdfMake.vfs;
import * as pdfMake from 'pdfmake/build/pdfMake';

@Component({
  selector: 'app-appointmentstatus',
  templateUrl: './appointmentstatus.component.html',
  styleUrls: ['./appointmentstatus.component.css']
})
export class AppointmentstatusComponent implements OnInit {

  value: Appointment | any = [];
  prescription: Prescription | any;
  date1: any;
  datedate: any;
  appointmentObj: Appointment | any;
  cancelObj: AppointmentCancel | any;
  
  headers=["Appointment Id","Appointment Date","Appointment Time","Purpose","Availability","Doctor Id","Patient Id","Patient Name","Confirm","Cancel","Going in","Generate Prescription"];

  constructor(private router:Router, private appservice:AppointmentService

    ) { }
    

  ngOnInit(): void {
    this.datedate={"appointmentDate":this.date1};
    // this.appointmentObj.applicationDate=this.date1;
    console.log(this.date1);
    // let resp=this.http.post("http://localhost:9091/appointment/getappointmentbydate", this.appointmentObj );
    // resp.subscribe((data)=>console.log(data))
    // resp.subscribe((data)=>this.value=data)
  }

  allrequest(){
    this.router.navigate(['/appointment/allrequest'])
  }
  
  allrequests(date1: any){
    this.datedate={"appointmentDate":this.date1};
    const date=this.date1;
    // this.router.navigate(['/appointment/allrequest'])
    console.log(date1);
    const resp=this.appservice.generateappointment(date)
    resp.subscribe((data)=>{console.log(data) 
    this.value=data})
   

  }
  

  confirmAppointment(pid:number,cappointment : any){
    
    
    this.appservice.confirmappointment(pid,cappointment)
    .subscribe((data: any)=>{ 
      this.appointmentObj=data
      const pos = this.value.findIndex(
        (e: any) => e.applicationId === this.appointmentObj.applicationId
      );

      this.value.splice(pos,1,this.appointmentObj);
      });
      
        
     

    // let res=this.http.post("http://localhost:9091/receptionistController/confirmAppointment/"+pid,cappointment);
    // res.subscribe((data)=>console.log(data))
    // res.subscribe((data)=>this.value=data)
    
    
    // setTimeout(function(){this.allrequests(this.date1);},5000);
  }
  cancelAppointment(cancelappointment: any, pid:number){
    
    // const resp=this.appservice.cancelappointment(pid,cancelappointment);
    // resp.subscribe((data)=>{console.log(data) 
    // this.cancelObj=data})


    this.appservice.cancelappointment(pid,cancelappointment)
    .subscribe((data: any)=>{ 
    this.appointmentObj=data
    const pos = this.value.findIndex(
    (e: any) => e.applicationId === this.appointmentObj.applicationId
    );

    this.value.splice(pos,1,this.appointmentObj);
    });
      



    
  }


  goingIn(goingInto: any, pid:number){
    
    // const resp=this.appservice.goingin(pid,cancelappointment);
    // resp.subscribe((data)=>{console.log(data) 
    // this.cancelObj=data})

    this.appservice.goingin(pid,goingInto)
    .subscribe((data: any)=>{ 
    this.appointmentObj=data
    const pos = this.value.findIndex(
    (e: any) => e.applicationId === this.appointmentObj.applicationId
    );

    this.value.splice(pos,1,this.appointmentObj);
    });


  }


  downloadTest = (generateprescription: any) => {

    const resp=this.appservice.generatePrescription(generateprescription);
    resp.subscribe((data)=>{console.log(data) 
    this.prescription=data});
    console.log(this.prescription);

    // const num: number=  this.prescription.presId

    const docDefinition = {
        content: [{

         
            table: {
                headerRows: 1,
                widths: ["*", "*"],
                body: [
                    [{ text: 'Details', bold: true }, { text: 'Description', bold: true }],
                    // ['Prescription Id', this.prescription.presId.json()],
                    // ['Booking Id', this.prescription.appointmentId.json()],
                    // ['PatientId', this.prescription.patientId.json()],
                    
                    ['Description',this.prescription.description.json()]
                    // ['Prescription Id', '1'],
                    // ['Booking Id', '1'],
                   


                    // [{ text: 'Bold value', bold: true }, 'Val 2', 'Val 3', 'Чё']
                ]
            }
        }]
    };
    pdfMake.createPdf(docDefinition).download('pdfmake.pdf');
}


  // gotodetails(bokid:number){
  //   this.router.navigate(['allbook/abook/', bokid]);
  // }


}
