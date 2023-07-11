import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css'],
})
export class ShippingComponent implements OnInit {
  // shippingCosts先不指定值，利用observable來斷言 type:string, price:number 且是一個陣列
  shippingCosts!: Observable<{ type: string; price: number }[]>;

  constructor(private cartService: CartService) {}
  ngOnInit() {
    this.shippingCosts = this.cartService.getShippingPrice();
  }
}
