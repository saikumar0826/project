import { Component } from '@angular/core';
import { FakeflipkartService } from '../fakeflipkart.service';

@Component({
  selector: 'app-fakeflipkart',
  templateUrl: './fakeflipkart.component.html',
  styleUrls: ['./fakeflipkart.component.css']
})
export class FakeflipkartComponent {
  flipkart:any=[];

  constructor(private _fakefliplart:FakeflipkartService){

    _fakefliplart. b().subscribe(
      (data:any)=>{
        this.flipkart = data;

      },
      (err:any)=>{
        alert("Internal server error")
      }

    )

  }

}
