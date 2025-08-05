import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CustomToastrService {
  constructor(private toastr: ToastrService) { }

  message(toasterConfig : Partial<ToastrConfig>) {
    const toastConfig = new ToastrConfig(toasterConfig)

    this.toastr[toastConfig.messageType](toastConfig.message, toastConfig.title, {
      positionClass: toastConfig.possion
    })
  }

}
export class ToastrConfig {
  constructor(config?: Partial<ToastrConfig>){
    if(config){
      Object.assign(this,config)
    }
  }
  message: string = '';
  title: string = '';
  messageType: ToastrMessageType = ToastrMessageType.Info;
  possion: ToastrPossion = ToastrPossion.TopFullWidth
}
export enum ToastrPossion {
  TopRight = "toast-top-right",
  BottomRight = "toast-bottom-right",
  BottomLeft = "toast-bottom-left",
  TopLeft = "toast-top-left",
  TopFullWidth = "toast-top-full-width",
  BottomFullWidth = "toast-bottom-full-width",
  TopCenter = "toast-top-center",
  BottomCenter = "toast-bottom-center"
}
export enum ToastrMessageType {
  Succes = "success",
  Info = "info",
  Warning = "warning",
  Error = "error"
}