import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ShoppingRoutingModule } from './shopping-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { UserInfoComponent } from './user-info/user-info.component';


@NgModule({
  declarations: [
    ProductListComponent,
    CartComponent,
    UserInfoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ShoppingRoutingModule
  ]
})
export class ShoppingModule { }

// Export as RemoteEntryModule for Module Federation
export class RemoteEntryModule extends ShoppingModule { }
