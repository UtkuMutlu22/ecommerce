import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Base, SpinnerType } from '../../../base/base';

@Component({
  selector: 'app-order',
  imports: [],
  templateUrl: './order.html',
  styleUrl: './order.scss'
})
export class Order  extends Base {
  constructor(spinner: NgxSpinnerService) {
    super(spinner)
  }
  ngOnInit() {
    this.showSpinner(SpinnerType.BallScaleMultiple)
  }
}
