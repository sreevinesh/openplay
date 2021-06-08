import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  userDatas: any = {

  }
 // currentUser: any;

  constructor() { }

saveDetails() {
  localStorage.setItem("userDatas", JSON.stringify(this.userDatas))
  //if (this.currentUser) {
    //localStorage.setItem("currentUser", JSON.stringify(this.currentUser))
  //}
}



register(uname: any, age: any, dist: any, vac: any) {
  if (uname in this.userDatas) {
    alert("User exist")
    return false
  }
  else {
    this.userDatas[uname] = {
      uname,
      age,
      dist,
      vac
    }
    this.saveDetails();
    alert("Register Successful")
    console.log(this.userDatas);
    return true
  }
}
}