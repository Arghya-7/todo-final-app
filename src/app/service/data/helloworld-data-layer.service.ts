import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class HelloWorldBean{
  constructor(public message:string){}
}

@Injectable({
  providedIn: 'root'
})
export class HelloworldDataLayerService {

  constructor(public http:HttpClient) { }

  getMessage(){
    return this.http.get<HelloWorldBean>("http://localhost:8080/helloworld");
  }
}
