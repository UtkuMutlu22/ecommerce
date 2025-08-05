import { NgxSpinnerService } from "ngx-spinner";


export class Base {
  constructor(private spinner: NgxSpinnerService) { }

  showSpinner(spinnerType: SpinnerType) {
    this.spinner.show(spinnerType);
    setTimeout(() => this.hideSpinner(spinnerType), 3000)
  }
  hideSpinner(spinnerType: SpinnerType) {
    this.spinner.hide(spinnerType);
  }
}

export enum SpinnerType {
  BallScaleMultiple = "s1",
  LineScaleParty = "s2",
  BallClimbingDot = "s3"
}