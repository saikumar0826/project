import { Component } from '@angular/core';

@Component({
  selector: 'app-amazon1',
  templateUrl: './amazon1.component.html',
  styleUrls: ['./amazon1.component.css']
})
export class Amazon1Component {

 

  productname:string="";
  price:number=0;
  rating:number=0;
  freedelivery:boolean=true;
  
  submit(){
    let product ={
      name:this.productname,
      price:this.price,
      rating:this.rating,
      freedelivery:this.freedelivery

    }
    this.products.push(product);
  }
 

 


  products:any = [
    { name: 'mobile',price: 10000, rating: 5, freedelivery:'yes', },
    { name: 'shirt', price: 3000, rating: 3,freedelivery:'no', },
    { name: 'pant', price: 4000, rating: 5,freedelivery:'yes',},
    { name: 'flipflop', price: 1000, rating: 3.5,freedelivery:'no',},
    { name: 'shoes', price: 3000, rating: 4.2,freedelivery:'yes', },
    { name: 'specs', price: 999, rating: 3.8,freedelivery:'no', },
    { name: 'watch',  price: 4000, rating: 5,freedelivery:'yes', }
]

pricelow(){
  this.products.sort((a:any,b:any)=>a.price-b.price);
}
pricehigh(){
  this.products.sort((a:any,b:any)=>b.price-a.price);
}
ratinglow(){
  this.products.sort((a:any,b:any)=>a.rating-b.rating);
}

ratinghigh(){
  this.products.sort((a:any,b:any)=>b.rating-a.rating);
}
discount(){
  this.products=this.products.map((product:any)=>{
    product.price = product.price/2;
    return product;
  })
}
add50(){
  this.products=this.products.map((product:any)=>{
    product.price = product.price +50;
  })
}
total(){
  var total=this.products.reduce((sum:any,product:any)=>sum+product.price,0);
  alert("total car price:"+total)
}

 delete(i:number){
  this.products.slice(i,1);
 }

}
