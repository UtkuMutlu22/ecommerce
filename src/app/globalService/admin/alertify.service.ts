import { Injectable } from '@angular/core';

declare var alertify: any; // Declare alertify globally

@Injectable({
  providedIn: 'root' //Dependency injection at root level
})
export class AlertifyService {
  constructor() { }
  message(alertifyConfig: Partial<AlertifyConfig>): void {
      
    const alertConfig = new AlertifyConfig(alertifyConfig);
      
    if (alertConfig.delay > 0) {
      alertify.set('notifier', 'delay', alertConfig.delay);
    }

    alertify.set('notifier', 'position', alertConfig.alertifyPosition);
    const messageDetail :any = alertify[alertConfig.alertifyType](alertConfig.message);

    if (alertifyConfig.dismisOther) {
      messageDetail.dismissOthers();
    }
  }
  dismissAll(): void {
    alertify.dismissAll();
  }
}

export class AlertifyConfig {
  
constructor(config?: Partial<AlertifyConfig>) {
    if (config) {
      Object.assign(this, config);
    }
  }

  message: string = 'Alertify message';
  alertifyType: AlertifyType = AlertifyType.Success;
  alertifyPosition: AlertifyPosition = AlertifyPosition.TopRight;
  delay: number = 3;
  dismisOther: boolean = false;
 
}



export enum AlertifyType {
  Success = 'success',
  Error = 'error',
  Warning = 'warning',
  Message = 'message',
  Notify = 'notify'
}
export enum AlertifyPosition {
  TopLeft = 'top-left',
  TopRight = 'top-right',
  BottomLeft = 'bottom-left',
  BottomRight = 'bottom-right',
  TopCenter = 'top-center',
  BottomCenter = 'bottom-center'
}
