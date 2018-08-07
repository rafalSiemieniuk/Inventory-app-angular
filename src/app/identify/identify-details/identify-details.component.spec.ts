import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentifyDetailsComponent } from './identify-details.component';

describe('IdentifyDetailsComponent', () => {
  let component: IdentifyDetailsComponent;
  let fixture: ComponentFixture<IdentifyDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdentifyDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentifyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
