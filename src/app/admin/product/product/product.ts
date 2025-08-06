import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Base, SpinnerType } from '../../../base/base';
import { HttpClientService } from '../../../globalService/common/http-client-service';
import { subscribe } from 'diagnostics_channel';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.scss'
})
export class Product extends Base implements OnInit {
  constructor(spinner: NgxSpinnerService, private client: HttpClientService) {
    super(spinner)
  }
  ngOnInit(): void {
    this.showSpinner(SpinnerType.LineScaleParty)

    this.client.get<Product[]>({
      controller: 'products'
    }).subscribe(data => console.log(data))
    
    this.client.post({
      controller: "products"
    }, {
      name: 'Kalem',
      stock: 100,
      price: 15
    }).subscribe(data =>console.log("kalem",data))

    //   this.client.put({
    //     controller:'products'
    //   },
    // {
    //   id:'D87EF015-5C9A-4133-8117-3F860624367D',
    //   name:'Kalem Traş',
    //   stock:20,
    //   Price:3.5
    // }).subscribe(data =>console.log("kalem-traş",data))

    // this.client.delete({
    //   controller:'products'
    // },'D87EF015-5C9A-4133-8117-3F860624367D').subscribe()

  }
}
