 import { Component } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

  name:string = "";
  names:string[] = [];

  submit(){
    this.names.push(this.name);
  }
  delete(){
    this.names.pop();
  }

  ////..............................................

studentName:string = "";
studentAge:number =0

students:any = [];
create(){

  let student = {
    name:this.studentName,
    age:this.studentAge
  }
  this.students.push(student);
}

}
