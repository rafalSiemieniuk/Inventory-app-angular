import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentifyDetailPlaceComponent } from './identify-detail-place.component';

describe('IdentifyDetailPlaceComponent', () => {
  let component: IdentifyDetailPlaceComponent;
  let fixture: ComponentFixture<IdentifyDetailPlaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdentifyDetailPlaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentifyDetailPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
