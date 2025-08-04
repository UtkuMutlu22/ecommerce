import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatListModule} from '@angular/material/list';
@Component({
  selector: 'app-side-bar',
  imports: [RouterModule,MatListModule],
  standalone: true,
  templateUrl: './side-bar.html',
  styleUrl: './side-bar.scss'
})
export class SideBar {

}
