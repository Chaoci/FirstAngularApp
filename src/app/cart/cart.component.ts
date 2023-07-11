import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  items = this.cartService.getItems();

  //收集使用者的姓名和地址，請使用 FormBuilder 的 group() 方法來把 checkoutForm 屬性設定為一個包含 name 和 address 欄位的表單模型。
  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
  });
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}

  clearCart(){
    if(this.items.length > 0){
      this.items = this.cartService.clearCart();
      window.alert('Clear the Cart!');
    }
    else if (this.items.length == 0){
      window.alert('Your Cart is already empty!');
    }
  }

  onSubmit(): void {
    // Process checkout data here
    // step1 clear cart
    this.items = this.cartService.clearCart();
    // step2 tell people complete the submition
    console.warn('Your order has been submitted', this.checkoutForm.value);
    // step3 reset the form
    this.checkoutForm.reset();
  }
}
