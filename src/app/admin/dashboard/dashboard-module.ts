import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dashboard } from './dashboard/dashboard';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: Dashboard },
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Dashboard,
    
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
