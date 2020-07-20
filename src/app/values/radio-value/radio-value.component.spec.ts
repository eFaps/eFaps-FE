import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioValueComponent } from './radio-value.component';

describe('RadioValueComponent', () => {
  let component: RadioValueComponent;
  let fixture: ComponentFixture<RadioValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
