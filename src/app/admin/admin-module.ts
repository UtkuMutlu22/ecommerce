import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout-module';
import { ProductModule } from './product/product-module';
import { CustomerModule } from './customer/customer-module';
import { OrderModule } from './order/order-module';
import { DashboardModule } from './dashboard/dashboard-module';
import { NgxSpinnerModule } from 'ngx-spinner';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutModule,
    ProductModule,
    CustomerModule,
    OrderModule,
    DashboardModule,
    
  ],
  exports: [
    LayoutModule,
    ProductModule,
    CustomerModule,
    OrderModule,
    DashboardModule,
  ]
})
export class AdminModule { }
