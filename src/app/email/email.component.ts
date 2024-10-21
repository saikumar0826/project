import { Component } from '@angular/core';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent {

  emails:any=[];

  constructor( private _emailService:EmailService) {
    _emailService.a().subscribe(
    (data:any)=>{
      this.emails = data;
    },
    (err:any)=>{
      alert("Internal server error")
    }
  )
}

}
