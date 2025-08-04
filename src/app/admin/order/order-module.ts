import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Order } from './order/order';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: Order },
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,Order,RouterModule.forChild(routes)
  ],
  exports: [
    Order]
})
export class OrderModule { }
