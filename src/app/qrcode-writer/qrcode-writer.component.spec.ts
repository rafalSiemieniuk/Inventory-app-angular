import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QrcodeWriterComponent } from './qrcode-writer.component';

describe('QrcodeWriterComponent', () => {
  let component: QrcodeWriterComponent;
  let fixture: ComponentFixture<QrcodeWriterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QrcodeWriterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QrcodeWriterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
