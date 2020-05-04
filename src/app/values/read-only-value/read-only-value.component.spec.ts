import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ReadOnlyValueComponent } from "./read-only-value.component";

describe("ReadOnlyValueComponent", () => {
  let component: ReadOnlyValueComponent;
  let fixture: ComponentFixture<ReadOnlyValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReadOnlyValueComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadOnlyValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
