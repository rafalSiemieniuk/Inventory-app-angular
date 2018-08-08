import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentifyDetailEmployeeComponent } from './identify-detail-employee.component';

describe('IdentifyDetailEmployeeComponent', () => {
  let component: IdentifyDetailEmployeeComponent;
  let fixture: ComponentFixture<IdentifyDetailEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdentifyDetailEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentifyDetailEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
