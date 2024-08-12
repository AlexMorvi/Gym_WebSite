import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from '../../app/components/ui/nav-bar/nav-bar.component';



@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NavBarComponent, RouterOutlet],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {

}
