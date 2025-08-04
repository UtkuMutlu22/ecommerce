import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Customer } from './customer/customer';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: Customer },
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,Customer,RouterModule.forChild(routes)
  ],
  exports: [    Customer
  ]
})
export class CustomerModule { }
