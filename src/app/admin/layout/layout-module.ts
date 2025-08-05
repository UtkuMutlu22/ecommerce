import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from './header/header';
import { SideBar } from './side-bar/side-bar';
import { Footer } from './footer/footer';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Header,
    SideBar,
    Footer,
    NgxSpinnerModule
  ],
  exports: [
    Header,
    SideBar,
    Footer,
    
  ]
})
export class LayoutModule { }
