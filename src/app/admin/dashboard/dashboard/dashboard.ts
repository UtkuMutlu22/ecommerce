import { Component } from '@angular/core';
import { PlatformService } from '../../../globalService/platform.service';
import { AlertifyPosition, AlertifyService, AlertifyType } from '../../../globalService/admin/alertify.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Base, SpinnerType } from '../../../base/base';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard extends Base {
  aletrtyType: any;
  constructor(spinner: NgxSpinnerService, private platform: PlatformService, private aletrty: AlertifyService) {
    super(spinner)
  }

  ngOnInit() {
    this.showSpinner(SpinnerType.BallClimbingDot)
  }
  m(message: string) {

    this.aletrty.message(
      {
        message: message
        , alertifyType: AlertifyType.Success
        , alertifyPosition: AlertifyPosition.TopRight
        , delay: 5
        , dismisOther: true
      }
    ); // Call the message method with the config object

  }
  m2(alertConfig: any) {

    this.aletrty.message(alertConfig); // Call the message method with the config object

  }
  d() {
    this.aletrty.dismissAll();
  }

}
