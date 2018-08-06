import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDevicesDetailsComponent } from './my-devices-details.component';

describe('MyDevicesDetailsComponent', () => {
  let component: MyDevicesDetailsComponent;
  let fixture: ComponentFixture<MyDevicesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDevicesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDevicesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
