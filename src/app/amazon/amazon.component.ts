import { Component } from '@angular/core';

@Component({
  selector: 'app-amazon',
  templateUrl: './amazon.component.html',
  styleUrls: ['./amazon.component.css']
})
export class AmazonComponent {

  category:string="";
  term:string = ""

   products = [
    { name: 'mobile', category: 'gadgets', price: 10000, rating: 5 },
    { name: 'shirt', category: 'fashion', price: 3000, rating: 3 },
    { name: 'pant', category: 'fashion', price: 4000, rating: 5 },
    { name: 'flipflop', category: 'footware', price: 1000, rating: 3.5 },
    { name: 'shoes', category: 'footware', price: 3000, rating: 4.2 },
    { name: 'specs', category: 'accessories', price: 999, rating: 3.8 },
    { name: 'watch', category: 'accessories', price: 4000, rating: 5 },
]

discount(){
  this.products=this.products.map(product=>{
    product.price = product.price/2;
    return product;
  })
}

pricelow(){
  this.products.sort((a,b)=>a.price-b.price);
}

pricehigh(){
  this.products.sort((a,b)=>b.price-a.price);
}
totalprice(){
  var total=this.products.reduce((sum,product)=>sum+product.price,0);
  alert("total cart price:"+total);

}

categorychange(){
  this.products = this.products.filter((product)=>product.category == this.category)
}

search(){

  this.products = this.products.filter((product)=>product.name.includes(this.term));
 }

 productname:string="";
 price:number=0;
 rating:number=0;
 deliverydate: Date= new Date;
 freedelivery:boolean=true;

 products1:any=[
  { name: 'mobile', category: 'gadgets', price: 10000, rating: 5 },
  { name: 'shirt', category: 'fashion', price: 3000, rating: 3 },
  { name: 'pant', category: 'fashion', price: 4000, rating: 5 },
  { name: 'flipflop', category: 'footware', price: 1000, rating: 3.5 },
  { name: 'shoes', category: 'footware', price: 3000, rating: 4.2 },
  { name: 'specs', category: 'accessories', price: 999, rating: 3.8 },
  { name: 'watch', category: 'accessories', price: 4000, rating: 5 },

 ];

 submit(){
  let product ={
    name:this.productname,
    price:this.price,
    rating:this.rating,
    deliverydate:this.deliverydate,
    freedelivery:this.freedelivery

  }
  this.products1.push(product);
}
delete(i:number){
  this.products.splice(i,1);
}
 }

