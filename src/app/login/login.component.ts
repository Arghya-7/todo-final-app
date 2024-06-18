import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(public router:Router,public auth:HardcodedAuthenticationService){}
  name = "";
  password = "";
  invalid = false;
  validation(){
    if(this.auth.authenticate(this.name,this.password)){
      this.router.navigate(['dashboard'])
      return true;
    }
    this.invalid = true;
    return false;
  }
}
