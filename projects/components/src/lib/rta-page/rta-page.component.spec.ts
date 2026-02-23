import { ComponentFixture, TestBed } from "@angular/core/testing";

import { RtaPageComponent } from "./rta-page.component";

describe("RtaPageComponent", () => {
  let component: RtaPageComponent;
  let fixture: ComponentFixture<RtaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RtaPageComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RtaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
