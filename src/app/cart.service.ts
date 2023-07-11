import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];

  constructor(private http: HttpClient) {}

  //利用斷言語法來操作
  getShippingPrice() {
    return this.http.get<{ type: string; price: number }[]>(
      '/assets/shipping.json'
    );
  }

  // 添加prodcut到格式是Product的陣列資料裡面

  addToCart(product: Product) {
    this.items.push(product);
  }

  //方法會收集使用者加到購物車中的商品，並返回每個商品及其數量。
  getItems() {
    return this.items;
  }

  //清除所有Cart內的資料
  clearCart() {
    this.items = [];
    return this.items;
  }
}
