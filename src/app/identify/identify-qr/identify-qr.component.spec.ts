import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentifyQrComponent } from './identify-qr.component';

describe('IdentifyQrComponent', () => {
  let component: IdentifyQrComponent;
  let fixture: ComponentFixture<IdentifyQrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdentifyQrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentifyQrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
