import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VechicleService } from '../vechicle.service';

@Component({
  selector: 'app-vechile-details',
  templateUrl: './vechile-details.component.html',
  styleUrls: ['./vechile-details.component.css']
})
export class VechileDetailsComponent {

  public vehicle:any = {};


  constructor(private _activatedRoute:ActivatedRoute, private _vehicleService:VechicleService){

    _activatedRoute.params.subscribe(
      (data:any)=>{
        console.log(data.id);
       
        // api call with data.id
        _vehicleService.getVehicle(data.id).subscribe(
          (data:any)=>{
            this.vehicle = data;
          }
        )
      }
    )
  }

}
