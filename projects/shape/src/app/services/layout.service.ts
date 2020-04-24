import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Layout } from '../models/layout';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  private layoutSource = new BehaviorSubject<Layout>(null);
  currentLayout = this.layoutSource.asObservable();

  constructor() { }


  public loadLayout() {
    const layout = {}
    this.layoutSource.next(layout)
  }
}
