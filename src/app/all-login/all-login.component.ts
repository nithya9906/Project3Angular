import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';
import { Logins } from '../loginDetail';
import { Status } from '../Status';

@Component({
  selector: 'app-all-login',
  templateUrl: './all-login.component.html',
  styleUrls: ['./all-login.component.css']
})
export class AllLoginComponent implements OnInit {
  l:Logins=new Logins()
  data1:any
   constructor(private reg:LoginServiceService,private router: Router) { }
 
   ngOnInit(): void {
   }
   signUp(){
     console.log(this.l)
 
     let res=this.reg.userlogin(this.l);
     res.subscribe((data1)=>this.check(this.data1)); 
 
   }
 
   public check(data:Status){
     console.log(data);
     if(data.stat==true)
     {
       
       alert("Success");
       
       //this.router.navigate(["home"])
     }
     else{
      alert("Invalid credentials");
     }
 }
 

}
