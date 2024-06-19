import { Component, OnInit } from '@angular/core';
import { HelloworldDataLayerService } from '../service/data/helloworld-data-layer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  constructor(public service:HelloworldDataLayerService){}
  valuePresent = false;
  message = "";
  displayApiMessage(message:string){
    this.valuePresent = true;
    this.message = message;
  }
  connectToBackend() {
    this.service.getMessage().subscribe(
        request => this.displayApiMessage(request.message)
    );
  }
  name: string | null = "";
  ngOnInit(): void {
    this.name = sessionStorage.getItem("name");
  }
}
