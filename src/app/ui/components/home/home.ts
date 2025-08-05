import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CustomToastrService, ToastrMessageType, ToastrPossion } from '../../../globalService/ui/custom-toastr.service';
@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
constructor(private toastr: CustomToastrService) {}
show() {
    this.toastr.message({message:'Cofig demo message',title:"Config demo title",messageType:ToastrMessageType.Succes,possion:ToastrPossion.TopCenter});
  }
  showWithMessage(message: string,title:string) {
  
      this.toastr.message({message:'Cofig demo message 2',title:"Config demo title 2",messageType:ToastrMessageType.Info,possion:ToastrPossion.TopRight}); // Call the message method with the config object
  
    }
}
