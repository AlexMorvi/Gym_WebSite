import { NgFor, NgIf, TitleCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ActionsPipe } from '../../../pipes/actions.pipe';

@Component({
  selector: 'app-nav-bar-item',
  standalone: true,
  imports: [NgFor, NgIf,RouterLink, TitleCasePipe, ActionsPipe],
  templateUrl: './nav-bar-item.component.html',
  styleUrl: './nav-bar-item.component.css'
})
export class NavBarItemComponent {
  @Input() title?: string;
  @Input() actions?: Array<string>;
  isActive: boolean = false;
  

  showActions() {
    this.isActive = !this.isActive;
  }


}
