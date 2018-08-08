import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentifyDetailDeviceComponent } from './identify-detail-device.component';

describe('IdentifyDetailDeviceComponent', () => {
  let component: IdentifyDetailDeviceComponent;
  let fixture: ComponentFixture<IdentifyDetailDeviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdentifyDetailDeviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentifyDetailDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
