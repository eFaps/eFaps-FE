import { TestBed } from "@angular/core/testing";

import { WicketService } from "./wicket.service";

describe("WicketService", () => {
  let service: WicketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WicketService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
