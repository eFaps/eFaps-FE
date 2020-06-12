import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NavItem } from 'src/app/models';

@Component({
  selector: 'eFaps-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  @Input() items: NavItem[];
  @ViewChild("childMenu", { static: true }) public childMenu;

  constructor() {}

  ngOnInit(): void {}

}
