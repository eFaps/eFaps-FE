import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'eFaps-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(private layoutService: LayoutService) { }

  ngOnInit(): void {
    this.layoutService.currentLayout.subscribe({
      next: (layout) => {
        if (layout) {
          
        }
      }
    })
  }

}
