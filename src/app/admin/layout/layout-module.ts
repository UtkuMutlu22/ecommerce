import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from './header/header';
import { SideBar } from './side-bar/side-bar';
import { Footer } from './footer/footer';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Header,
    SideBar,
    Footer,
    
  ],
  exports: [
    Header,
    SideBar,
    Footer,
    
  ]
})
export class LayoutModule { }
