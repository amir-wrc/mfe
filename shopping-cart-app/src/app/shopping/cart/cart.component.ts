import { Component, OnInit } from '@angular/core';
import { CartService, CartItem } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  total: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.loadCart();
    this.cartService.cart$.subscribe(() => {
      this.loadCart();
    });
  }

  loadCart(): void {
    this.cartItems = this.cartService.getCartItems();
    this.total = this.cartService.getCartTotal();
  }

  updateQuantity(productId: number, quantity: number): void {
    this.cartService.updateQuantity(productId, quantity);
  }

  removeItem(productId: number): void {
    this.cartService.removeFromCart(productId);
  }

  clearCart(): void {
    if (confirm('Are you sure you want to clear the cart?')) {
      this.cartService.clearCart();
    }
  }

  checkout(): void {
    alert(`Checkout successful! Total: $${this.total.toFixed(2)}`);
    this.cartService.clearCart();
  }
}
