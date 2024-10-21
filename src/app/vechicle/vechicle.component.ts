import { Component } from '@angular/core';
import { VechicleService } from '../vechicle.service';

@Component({
  selector: 'app-vechicle',
  templateUrl: './vechicle.component.html',
  styleUrls: ['./vechicle.component.css']
})
export class VechicleComponent {

  vechicles: any = [];
  term: string = "";
  column:string="";
  order:string="";
  public page:number=1;

  constructor(private _vechicleService: VechicleService) {


    _vechicleService.getVehicles().subscribe(
      (data: any) => {
        this.vechicles = data;

      },
      (error: any) => {
        alert("Internal server error");
      }
    )


  }


  sort(){
    this._vechicleService.getSortedVehicles(this.column,this.order).subscribe(
      (data: any) => {
        this.vechicles = data;

      },

      (err: any) => {
        alert(err.error);
      }
    )
  }



  pagination(){
    this._vechicleService.getpagedVehicles(this.page).subscribe(
      (data: any) => {
        this.vechicles = data;

      },

      (err: any) => {
        alert("Internal server error");
      }
    )
  }


  search() {
    this._vechicleService.getFilterdVehicles(this.term).subscribe(
      (data: any) => {
        this.vechicles = data;

      },

      (err: any) => {
        alert(err.error);
      }
    )
  }
  delete(id:string){
    this._vechicleService.deleteVehicle(id).subscribe(
      (data: any) => {
       alert("deleted succesfully");
       location.reload();

      },

      (err: any) => {
        alert(err.error);
      }
    )
  }



}
