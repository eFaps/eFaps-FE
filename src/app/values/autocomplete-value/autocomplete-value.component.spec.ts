import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteValueComponent } from './autocomplete-value.component';

describe('AutocompleteValueComponent', () => {
  let component: AutocompleteValueComponent;
  let fixture: ComponentFixture<AutocompleteValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutocompleteValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
