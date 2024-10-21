import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VechicleService } from '../vechicle.service';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})
export class CreateVehicleComponent {
  public vehicleForm: FormGroup = new FormGroup({
    vehicle : new FormControl(),
    manufacturer: new FormControl(),
    model : new FormControl(),
    type : new FormControl(),
    fuel : new FormControl(),
    color : new FormControl(),
    image : new FormControl(),
    cost : new FormControl(),
  })

  constructor(private _vehicleService:VechicleService){}


  submit(){
    console.log(this.vehicleForm.value);
    this._vehicleService.createVehicle(this.vehicleForm.value).subscribe(
      (data:any)=>{
        alert("created  succesfully??");
      },
      (err:any)=>{
        alert(err.error);
      }
      
    )
  }

}
