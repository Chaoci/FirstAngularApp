import { Product } from './../products';
import { Component, OnInit } from '@angular/core';

import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit{
  // 延伸了原本在Product.ts中的products中的內容
  products = [...products];

  constructor(private cartService: CartService){}
  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  addToCart(product:Product){
    this.cartService.addToCart(product);
    window.alert('Add to the cart successfully!');
  }

  ngOnInit(): void {
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
