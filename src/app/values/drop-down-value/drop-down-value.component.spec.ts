import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDownValueComponent } from './drop-down-value.component';

describe('DropDownValueComponent', () => {
  let component: DropDownValueComponent;
  let fixture: ComponentFixture<DropDownValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropDownValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropDownValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
