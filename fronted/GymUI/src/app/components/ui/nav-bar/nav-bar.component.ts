import { Component, OnInit } from '@angular/core';
import { NavBarItemComponent } from '../nav-bar-item/nav-bar-item.component';
import { NgFor } from '@angular/common';
import { NAV_ITEMS } from '../../../config/NavItems.config';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [NavBarItemComponent, NgFor],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit {
  items: Array<any> = [];

  constructor() {}

  ngOnInit(): void {
    this.items = NAV_ITEMS;
  }
}
