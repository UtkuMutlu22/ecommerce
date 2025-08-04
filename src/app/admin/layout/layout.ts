import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutModule } from './layout-module';
import {MatSidenavModule} from '@angular/material/sidenav';
import { isPlatformBrowser } from '@angular/common';
import { PlatformService } from '../../globalService/platform.service';
@Component({
  selector: 'app-layout',
  imports: [RouterModule,LayoutModule,MatSidenavModule],
  templateUrl: './layout.html',
  styleUrl: './layout.scss'
})
export class Layout implements OnInit
{
    private alertify: any;

  constructor(private platform: PlatformService) {}

  ngOnInit() {
    if (this.platform.isBrowser()) {
      // alertify sadece tarayıcıda import ediliyor
      import('alertifyjs').then((alertify) => {
        this.alertify = alertify;
        this.alertify.success('Ready!');
      });
    }
  }
}
