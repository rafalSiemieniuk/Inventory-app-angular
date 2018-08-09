import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDevicesIdentifyComponent } from './my-devices-identify.component';

describe('MyDevicesIdentifyComponent', () => {
  let component: MyDevicesIdentifyComponent;
  let fixture: ComponentFixture<MyDevicesIdentifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDevicesIdentifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDevicesIdentifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
