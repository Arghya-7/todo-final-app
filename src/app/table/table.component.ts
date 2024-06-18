import { Component } from '@angular/core';
export class ToDo{
  constructor(public taskName:string,public time:number,public date:string){}
}


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  todos = [
    new ToDo("Study",2,new Date().toDateString()),
    new ToDo("Office",2,new Date().toDateString())
  ]
}
