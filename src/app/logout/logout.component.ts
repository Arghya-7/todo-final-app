import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit{
  constructor(public auth:HardcodedAuthenticationService,public router:Router){}
  ngOnInit(): void {
    this.auth.logout();
    this.router.navigate([""]);
  }

}
