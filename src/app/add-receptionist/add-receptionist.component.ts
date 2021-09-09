import { Component, OnInit } from '@angular/core';
import { DoctorServiceService } from '../doctor-service.service';
import { Receptionist } from '../Receptionist';

@Component({
  selector: 'app-add-receptionist',
  templateUrl: './add-receptionist.component.html',
  styleUrls: ['./add-receptionist.component.css']
})
export class AddReceptionistComponent implements OnInit {
r:Receptionist=new Receptionist();
message:any;
  constructor(private reg: DoctorServiceService) { }

  ngOnInit(): void {
  }
register(){
  console.log(this.r);
  let res=this.reg.addReceptionist(this.r);

  res.subscribe((data)=>this.message=data.rname); 
}
}
