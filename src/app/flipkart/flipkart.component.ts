import { Component } from '@angular/core';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css']
})
export class FlipkartComponent {

  productName:string = "";
  Price:number= 0;
  Rating:number=0;
  deliverydate: Date= new Date;
  FreeDelivery:boolean=true;


  products:any=[]; 

  submit(){
    let product ={
      name:this.productName,
      price:this.Price,
      rating:this.Rating,
      deliverydate:this.deliverydate,
      FreeDelivery:this.FreeDelivery
    }
    this.products.push(product);

  }
  delete(i:number){
    this.products.splice(i,1);
  }


}
