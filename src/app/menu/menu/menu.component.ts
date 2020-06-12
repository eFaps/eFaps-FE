import { Component, OnInit, Input } from '@angular/core';
import { NavItem } from 'src/app/models';

@Component({
  selector: 'eFaps-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() navItems: NavItem[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
