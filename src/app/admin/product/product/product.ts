import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Base, SpinnerType } from '../../../base/base';
import { HttpClientService } from '../../../globalService/common/http-client-service';
import { subscribe } from 'diagnostics_channel';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ProductCreate } from './product-create/product-create';
import { ProductList } from './product-list/product-list';
@Component({
  selector: 'app-product',
  imports: [MatSidenavModule,ProductCreate,ProductList],
  templateUrl: './product.html',
  styleUrl: './product.scss'
})
export class Product extends Base implements OnInit {
  constructor(spinner: NgxSpinnerService, private client: HttpClientService) {
    super(spinner)
  }
  ngOnInit(): void {
    this.showSpinner(SpinnerType.LineScaleParty)

   

  }
}
