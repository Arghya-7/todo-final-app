import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(name:string,password:string):boolean{
    if(name === "Arghya" && password === "123"){
      sessionStorage.setItem("name",name);
      return true;
    }
    return false;
  }

  validate(){
    if(sessionStorage.getItem("name") != null){
      return true;
    }
      return false;
  }

  logout()
  {
    sessionStorage.removeItem("name");
  }
}
