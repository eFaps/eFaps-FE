import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUploadValueComponent } from './file-upload-value.component';

describe('FileUploadValueComponent', () => {
  let component: FileUploadValueComponent;
  let fixture: ComponentFixture<FileUploadValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileUploadValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileUploadValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
