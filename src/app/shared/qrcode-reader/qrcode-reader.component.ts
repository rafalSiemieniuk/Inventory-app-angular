import { Component, OnInit, OnDestroy } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';
import jsQR from 'jsqr';

@Component({
  selector: 'app-qrcode-reader',
  templateUrl: './qrcode-reader.component.html',
  styleUrls: ['./qrcode-reader.component.scss']
})
export class QrcodeReaderComponent implements OnInit, OnDestroy {

  @Output() callback: EventEmitter<any> = new EventEmitter();
  @ViewChild('canvasEl') canvasEl: ElementRef;
  public context: CanvasRenderingContext2D;

  video = document.createElement('video');

  loadingMessage = 'Loading video...';

  videoLoaded = false;
  twoCameras = false;

  qrCode: string = null;
  tickBind;
  cameraMode: Array<string> = ['environment', 'user'];

  constructor() { }

  ngOnInit() {
    this.detectionNumberCameras();
    this.context = (<HTMLCanvasElement>this.canvasEl.nativeElement).getContext('2d');
    this.tickBind = this.tick.bind(this);
    this.startCamera();
  }

  ngOnDestroy() {
    this.stopCamera();
  }

  detectionNumberCameras() {
    navigator.mediaDevices.enumerateDevices()
      .then(devices => {
        const numberCameras = devices.filter((device) => device.kind === 'videoinput');
        if (numberCameras.length > 1) {
          this.twoCameras = true;
        }
      });
  }

  switch() {
    this.stopCamera();
    this.cameraMode.reverse();
    this.startCamera();
  }

  startCamera() {
    navigator.mediaDevices.getUserMedia({ video: { facingMode: this.cameraMode[0] } }).then((stream) => {
      this.video.srcObject = stream;
      this.video.play();
      requestAnimationFrame(this.tickBind);
    }).catch((error) => {
      this.loadingMessage = 'Unable to access video stream (please make sure you have a webcam enabled)';
    });
  }

  stopCamera() {
    for (const track of this.video.srcObject.getTracks()) {
      track.stop();
    }
  }

  tick() {
    if (this.video.readyState === this.video.HAVE_ENOUGH_DATA) {
      this.videoLoaded = true;
      this.canvasEl.nativeElement.height = this.video.videoHeight;
      this.canvasEl.nativeElement.width = this.video.videoWidth;
      this.context.drawImage(this.video, 0, 0, this.canvasEl.nativeElement.width, this.canvasEl.nativeElement.height);
      const imageData = this.context.getImageData(0, 0, this.canvasEl.nativeElement.width, this.canvasEl.nativeElement.height);
      const code = jsQR(imageData.data, imageData.width, imageData.height);
      if (code) {
        this.drawLine(code.location.topLeftCorner, code.location.topRightCorner, '#FF3B58');
        this.drawLine(code.location.topRightCorner, code.location.bottomRightCorner, '#FF3B58');
        this.drawLine(code.location.bottomRightCorner, code.location.bottomLeftCorner, '#FF3B58');
        this.drawLine(code.location.bottomLeftCorner, code.location.topLeftCorner, '#FF3B58');
        if (code.data) {
          this.callback.emit(code.data);
        }
      }
    }
    requestAnimationFrame(this.tickBind);
  }

  private drawLine(begin, end, color) {
    this.context.beginPath();
    this.context.moveTo(begin.x, begin.y);
    this.context.lineTo(end.x, end.y);
    this.context.lineWidth = 4;
    this.context.strokeStyle = color;
    this.context.stroke();
  }
}
