import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDevicesSummaryComponent } from './my-devices-summary.component';

describe('MyDevicesSummaryComponent', () => {
  let component: MyDevicesSummaryComponent;
  let fixture: ComponentFixture<MyDevicesSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDevicesSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDevicesSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
