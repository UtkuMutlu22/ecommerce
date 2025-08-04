import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Home } from '../ui/components/home/home';
import { Baskets } from '../ui/components/baskets/baskets';
import { Product } from '../ui/components/product/product';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Home,
    Baskets,
    Product
  ],
  exports: [
    Home,
    Baskets,
  Product]
})
export class UiModule { }
