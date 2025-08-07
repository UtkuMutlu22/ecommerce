import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { ProductService } from '../../../../globalService/common/models/product/product.service';
import { Create_Product } from '../../../../contracts/product';
import { Base, SpinnerType } from '../../../../base/base';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertifyPosition, AlertifyService, AlertifyType } from '../../../../globalService/admin/alertify.service';
@Component({
  selector: 'app-product-create',
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './product-create.html',
  styleUrl: './product-create.scss'
})
export class ProductCreate extends Base {
  constructor(private productService: ProductService, private spiner: NgxSpinnerService, private alertify: AlertifyService) {
    super(spiner);
  }

  create(name: HTMLInputElement, stock: HTMLInputElement, price: HTMLInputElement) {
    this.showSpinner(SpinnerType.LineScaleParty);
    const create_product_vm = new Create_Product();
    create_product_vm.name = name.value;
    create_product_vm.stock = parseInt(stock.value);
    create_product_vm.price = parseFloat(price.value);

    this.productService.create(create_product_vm, () => {
      this.hideSpinner(SpinnerType.LineScaleParty)
      this.alertify.message({ dismisOther: true, alertifyPosition: AlertifyPosition.TopCenter, alertifyType: AlertifyType.Success, message: "Successfull" });
    },
      (errorMessage: string) => {
        // this.alertify.message({
        //   dismisOther: true,
        //   alertifyPosition: AlertifyPosition.TopCenter,
        //   alertifyType: AlertifyType.Error,
        //   message: errorMessage
        // });
      }
    );
  }
}
