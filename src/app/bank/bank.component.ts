import { Component } from '@angular/core';
import { BankService } from '../bank.service';


@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent {

  bank:any = [];


  constructor(private _bankservice:BankService){

    _bankservice .getBank().subscribe(
      (data:any)=>{
        this.bank = data;
      },
      (err:any)=>{
        alert("internal server error");
      }
    )
  }

}
