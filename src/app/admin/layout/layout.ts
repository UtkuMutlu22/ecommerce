import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutModule } from './layout-module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { PlatformService } from '../../globalService/platform.service';
import { AlertifyPosition, AlertifyService, AlertifyType } from '../../globalService/admin/alertify.service';
@Component({
  selector: 'app-layout',
  imports: [RouterModule, LayoutModule, MatSidenavModule],
  templateUrl: './layout.html',
  styleUrl: './layout.scss'
})
export class Layout implements OnInit {
  constructor(
    private platform: PlatformService,
    private aletrty: AlertifyService, // Inject AlertifyService
  ) { }

  ngOnInit() {
    if (this.platform.isBrowser()) {
      // this.aletrty.message('Alertify is ready!', AlertifyType.Warning, AlertifyPosition.TopRight, 2000);
      
    }
  }
}
