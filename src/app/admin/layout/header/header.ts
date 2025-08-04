import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
@Component({
  selector: 'app-header',
  imports: [MatToolbarModule],
  standalone: true,
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

}
