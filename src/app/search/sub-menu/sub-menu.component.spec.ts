import { ComponentFixture, TestBed, async } from "@angular/core/testing";

import { SubMenuComponent } from "./sub-menu.component";

describe("SubMenuComponent", () => {
  let component: SubMenuComponent;
  let fixture: ComponentFixture<SubMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SubMenuComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
