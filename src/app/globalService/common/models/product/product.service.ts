import { Injectable } from '@angular/core';
import { HttpClientService } from '../../http-client-service';
import { Create_Product } from '../../../../contracts/product';
import { error } from 'console';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private httpClientService: HttpClientService) { }

  // create(product: Create_Product, successCallBack?: any) {
  //   this.httpClientService.post({ controller: 'products' }, product)
  //     .subscribe( result => {
  //       successCallBack();
  //     },error=>{

  //     });
  // }

  create(product: Create_Product, successCallBack?: any, errorCallBack?: any ) {
    this.httpClientService.post({ controller: 'products' }, product)
      .subscribe({
        next: result => {
          successCallBack?.();
        },
        error: (errorResponse: HttpErrorResponse) => {
          const err: Array<{ key: string, value: Array<string> }> = errorResponse.error;
          let message = '';
          err.forEach((_v, _i) => {
            _v.value.forEach((value, index) => {
              message += `${_v}<br>`
            });
          });
          errorCallBack?.(message);
        }
      });
  }
}
