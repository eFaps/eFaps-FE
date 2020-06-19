import { ComponentFixture, TestBed, async } from "@angular/core/testing";

import { SnippletValueComponent } from "./snipplet-value.component";

describe("SnippletValueComponent", () => {
  let component: SnippletValueComponent;
  let fixture: ComponentFixture<SnippletValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SnippletValueComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnippletValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
