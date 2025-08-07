import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from './product/product';
import { RouterModule, Routes } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';

const routes: Routes = [
  { path: '', component: Product },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, Product, RouterModule.forChild(routes),
    MatSidenavModule
  ],
  exports: [Product, MatSidenavModule
  ]
})
export class ProductModule { }
