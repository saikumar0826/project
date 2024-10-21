import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  public userForm:FormGroup = new FormGroup( {
    name: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    age: new FormControl('',[Validators.required,Validators.minLength(18),Validators.maxLength(60)]),
    phone: new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
    email: new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.pattern('^(?=.[a-z])(?=.[A-Z])(?=.\\d)(?=.[@$!%?&])[A-Za-z\\d@$!%?&]{8,}$')]),
    address: new FormGroup({
      city: new FormControl('',[Validators.required]),
      pin: new FormControl()
    }),


    type: new FormControl(),
  //busfree: new FormControl(),
  //hostelfee: new FormControl()
  cards: new FormArray([])
  })


  get cardsFormArray(){
    return this.userForm.get('cards') as FormArray;
  }
  addcard(){
    this.cardsFormArray.push(
      new FormGroup({
        number:new FormControl('',[Validators.required]),
        expiry:new FormControl(),
        cvv:new FormControl(),
      })
    )
  }

  delete(i:number){
    this.cardsFormArray.removeAt(i);
  }

  constructor(){

     this.userForm.get('type')?.valueChanges.subscribe(
      (data:any)=>{
        if(data=="DayScholor"){
          this.userForm.addControl('busfee', new FormControl());
          this.userForm.removeControl('hostelfee');
        }
        else{
          this.userForm.addControl('hostelfee', new FormControl());
          this.userForm.removeControl('busfee');
          
        }
      }
     )
  }





  submit(){
    this.userForm.markAllAsTouched();
    console.log(this.userForm);
  }

}
