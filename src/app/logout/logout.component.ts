import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonUserServiceService } from '../common-user-service.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private comService:CommonUserServiceService,private router:Router) { }

  ngOnInit(): void {
    this.comService.setUserLoggedIn(0);
    alert("Log out");
    this.router.navigate(['login']);
  }

}
