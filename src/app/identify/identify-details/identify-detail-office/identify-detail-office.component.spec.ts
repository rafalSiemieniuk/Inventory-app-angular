import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentifyDetailOfficeComponent } from './identify-detail-office.component';

describe('IdentifyDetailOfficeComponent', () => {
  let component: IdentifyDetailOfficeComponent;
  let fixture: ComponentFixture<IdentifyDetailOfficeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdentifyDetailOfficeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentifyDetailOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
