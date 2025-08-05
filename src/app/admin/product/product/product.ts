import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Base, SpinnerType } from '../../../base/base';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.scss'
})
export class Product extends Base  implements OnInit{
 constructor(spinner: NgxSpinnerService){
  super(spinner)
 }
 ngOnInit(): void {
     this.showSpinner(SpinnerType.LineScaleParty)
 }
}
