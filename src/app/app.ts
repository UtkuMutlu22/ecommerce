import { Component, signal, AfterViewInit, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { AdminModule } from './admin/admin-module';
import { UiModule } from './ui/ui-module';
import { NgxSpinnerModule, NgxSpinnerService } from "ngx-spinner";
import { PlatformService } from './globalService/platform.service';
import * as $ from 'jquery';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterModule,
    AdminModule,
    UiModule,
    NgxSpinnerModule

  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {

  protected readonly title = signal('ecommerce');
  
  constructor(private spinner: NgxSpinnerService, private http: HttpClient) { }


  ngOnInit() {
    this.http.get('https://localhost:7176/api/Products').subscribe({
    next: data => console.log(data),
    error: err => console.error('Angular hata:', err)
  });
    this.spinner.show('s1');

    setTimeout(() => {
      this.spinner.hide('s1');
    }, 5000);
  }

}
