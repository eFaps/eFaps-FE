import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchRestoreComponent } from './search-restore.component';

describe('SearchRestoreComponent', () => {
  let component: SearchRestoreComponent;
  let fixture: ComponentFixture<SearchRestoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchRestoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchRestoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
