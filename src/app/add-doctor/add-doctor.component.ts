import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Doctor } from '../Doctor';
import { DoctorServiceService } from '../doctor-service.service';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {
  b:Doctor=new Doctor();
  message:any;
  des:any;
  type:any;
  specialization:any;
  choices:any=["General","Specialist"];
  specs:any=["CARDIOLOGIST","NEUROLOGIST","ORTHOPEDIATRIST","DERMATOLOGIST"];
  
  constructor(private reg: DoctorServiceService ) {
   //this.des=this.b;
   // console.log(this.b);
    
   
    
   }
  
  required:any;
  ngOnInit(): void {
  }

  public register(){
    //console.log(this.b);
    //console.log(this.b);
   // console.log("Insides"+this.specialization);
    //console.log(this.specs[this.specialization]);
    this.b.designation=this.choices[this.type];
    this.b.specialization=this.specs[this.specialization];
    this.b.doctorAvailability.fromTime+=':00';
    this.b.doctorAvailability.toTime+=':00';
    console.log(this.b);
    
    let res=this.reg.addDoctor(this.b);
    res.subscribe((data)=>this.message=data.firstName); 
  }
  changeWebsite(e:any) {  
    console.log(e.target.value);  
  }  
  
  form = new FormGroup({  
    choices: new FormControl('', Validators.required)  
  });  
    
  get f(){  
    return this.form.controls;  
  }  
}
