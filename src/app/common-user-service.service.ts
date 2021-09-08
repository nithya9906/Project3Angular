import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonUserServiceService {
  public userId:number=0;

  constructor() {}

  setUserLoggedIn(Id:number) {
    this.userId = Id;
    console.log(this.userId);
  }

  getUserLoggedIn() {
    console.log(this.userId);
    return this.userId;
}
}
