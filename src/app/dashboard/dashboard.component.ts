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
  errorMessage = "";
  error = false;
  displayApiMessage(message:string){
    this.valuePresent = true;
    this.message = message;
  }
  displayErrorMessage(){
    this.errorMessage = "Error occures";
    this.error = true;
  }
  connectToBackend() {
    this.service.getMessage().subscribe(
        request => this.displayApiMessage(request.message)
    );
  }
  connectToBackendToGetErrorMessage(){
    this.service.getErrorMessage().subscribe(
      req => this.displayApiMessage(req.message),
      error => this.displayErrorMessage()
    )
  };
  useParametarizedArgument() {
    this.service.useParameterMessage("arghya").subscribe(
      req => this.displayApiMessage(req.message)
    );
  }
  name: string | null = "";
  ngOnInit(): void {
    this.name = sessionStorage.getItem("name");
  }
}
