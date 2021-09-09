import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonUserServiceService } from '../common-user-service.service';
import { LoginServiceService } from '../login-service.service';
import { Logins } from '../loginDetail';
import { Status } from '../Status';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  l:Logins =new Logins();
 data1:Status|any;
  constructor(private reg:LoginServiceService,private router: Router,private comService:CommonUserServiceService) {
    
   }

  ngOnInit(): void {
  }
  signUp(){
    console.log(this.l)

    let res=this.reg.userlogin(this.l);
    res.subscribe((data)=>{
      this.data1=data;
      console.log(this.data1);
      console.log(this.data1.role);
      this.check(this.data1);

    }); 
    //res.subscribe((data)=>this.data1=data);
   // let s=JSON.parse(this.data1); 
   //let s=this.data1.json()
   
   

  }

  public check(data1:Status){

    console.log(data1.stat);
    //console.log(data.stat);
    //this.data1=data;
    if(data1.stat==true )
    {
      if(data1.role=="doctor")
      {
        this.comService.setUserLoggedIn(data1.userId);
       // alert("Success");
        this.router.navigate(['login', 'header']);
       // this.router.navigate(['doctorProfile']);
    

      }
      else if(data1.role=="patient")
      {
        this.comService.setUserLoggedIn(data1.userId);
       // alert("Success");
        this.router.navigate(['login', 'patheader']);
       

      }
      else if(data1.role=="receptionist")
      {
        this.comService.setUserLoggedIn(data1.userId);
      //  alert("Receptionist Success");
        this.router.navigate(['login', 'rheader']);

      }
      else if(data1.role=="admin")
      {
        this.comService.setUserLoggedIn(data1.userId);

       // alert("Success");
        this.router.navigate(['login', 'aheader']);

      }

     
    }
    else{
      alert("Invalid credentials");
     }
   
}

}
