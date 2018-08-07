import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DevicesDetailsComponent } from '../devices-details/devices-details.component';

describe('MyDevicesDetailsComponent', () => {
  let component: DevicesDetailsComponent;
  let fixture: ComponentFixture<DevicesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevicesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevicesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
