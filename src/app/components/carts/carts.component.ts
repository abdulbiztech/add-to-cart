
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';


@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.scss']
})
export class CartsComponent implements OnInit {
  public product : any =[];
  public grandTotal!:number;
  constructor(private CartService:CartService){}
  ngOnInit(): void {
      this.CartService.getProducts()
      .subscribe((res:any)=>{
        this.product = res;
        this.grandTotal = this.CartService.getTotalPrice();
      })
  }
  removeItem(item:any){
    this.CartService.removeCartItem(item);
  }
  emptyCart(){
    this.CartService.removeAllCart();
  }
}
