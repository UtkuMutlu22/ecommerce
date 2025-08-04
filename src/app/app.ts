import { Component, signal, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { AdminModule } from './admin/admin-module';
import { UiModule } from './ui/ui-module';
import { PlatformService } from './globalService/platform.service';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterModule,
    AdminModule,
    UiModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements AfterViewInit {
  protected readonly title = signal('ecommerce');

  ngAfterViewInit() {
  }
}
