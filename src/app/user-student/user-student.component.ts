import { state } from '@angular/animations';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-student',
  templateUrl: './user-student.component.html',
  styleUrls: ['./user-student.component.css']
})
export class UserStudentComponent {

  public studentform:FormGroup= new FormGroup({
    name: new FormControl(),
    class: new FormControl(),
    fathername: new FormControl(), 
    email: new FormControl(),
    address:new FormGroup({
      city: new FormControl(),
      state: new FormControl(),
      pincode: new FormControl(),

    }),
    company:new FormGroup({
      companyname: new FormControl(),
      package:new FormControl(),

    }),

    type:new FormControl(),
    //busfee:new FormControl(),
    //hostelfee: new FormControl(),
    students: new FormArray([])


})

get studentsFormArray(){
  return this.studentform.get('students') as FormArray;
}

addstudents(){
  this.studentsFormArray.push(
    new FormGroup({
      class: new FormControl(),
      year: new FormControl(),
      percentage:new FormControl(),
    })
  )
}
delete(i:number){
  this.studentsFormArray.removeAt(i);
}



constructor(){
  this.studentform.get('type')?.valueChanges.subscribe(
    (data:any)=>{

      if(data=='dayscholor'){
        this.studentform.addControl('busfee',new FormControl());
        this.studentform.removeControl('hostelfee');
      }
      else{
        this.studentform.addControl('hostelfee',new FormControl());
        this.studentform.removeControl('busfee')

      }
      }

     
  )
}


submit(){
  console.log(this.studentform.value);
}

}

