import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonUserServiceService } from '../common-user-service.service';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {
b:any;
  constructor(private http:HttpClient,private comService:CommonUserServiceService) { }

  ngOnInit(): void {
    let id=this.comService.getUserLoggedIn();
    let res= this.http.get("http://13.127.153.216:9090/doctorController/doctorById/"+id);
     res.subscribe((data)=>this.b=data); 
   }
   register(){
     let id=this.comService.getUserLoggedIn();
     let res= this.http.put("http://13.127.153.216:9090/doctorController/updateDoctor",this.b);
      res.subscribe((data)=>this.b=data); 
      alert("Password Changed");
      
   }
}
