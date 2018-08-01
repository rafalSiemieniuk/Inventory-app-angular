import { Component, OnInit } from '@angular/core';
import jsQR from 'jsqr';
import { ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-qrcode-reader',
  templateUrl: './qrcode-reader.component.html',
  styleUrls: ['./qrcode-reader.component.scss']
})
export class QrcodeReaderComponent implements OnInit {

  @ViewChild('canvasEl') canvasEl: ElementRef;
  @ViewChild('outputContainer') outputContainer: ElementRef;
  @ViewChild('outputMessage') outputMessage: ElementRef;
  @ViewChild('outputData') outputData: ElementRef;
  @ViewChild('loadingMessage') loadingMessage: ElementRef;
  public context: CanvasRenderingContext2D;

  @Output() open: EventEmitter<any> = new EventEmitter();


  video = document.createElement('video');

  qrCode: string = null;
  xxx;
  constructor() { }

  ngOnInit() {
    this.context = (<HTMLCanvasElement>this.canvasEl.nativeElement).getContext('2d');
    this.xxx = this.tick.bind(this);
    navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } }).then((stream) => {
      this.video.srcObject = stream;
      // this.video.setAttribute('playsinline', true); // required to tell iOS safari we don't want fullscreen
      this.video.play();
      requestAnimationFrame(this.xxx);
    });
  }

  tick() {
    // this.loadingMessage.nativeElement.textContent = 'Loading video...';
    if (this.video.readyState === this.video.HAVE_ENOUGH_DATA) {
      // loadingMessage.hidden = true;
      // this.canvasEl.nativeElement.hidden = false;
      // this.outputContainer.hidden = false;

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
        // this.outputMessage.hidden = true;
        // this.outputData.parentElement.hidden = false;
        this.outputData.nativeElement.textContent = code.data;
        this.qrCode = code.data;

        if(code.data) {
          this.open.emit(code.data);
        }
      } else {
        // this.outputMessage.hidden = false;
        // this.outputData.parentElement.hidden = true;
      }
    }
    requestAnimationFrame(this.xxx);
  }

  private drawLine(begin, end, color) {
    // this.context.beginPath();
    // this.context.strokeStyle = 'purple'; // Purple path
    // this.context.moveTo(50, 0);
    // this.context.lineTo(150, 130);
    // this.context.stroke(); // Draw it

    this.context.beginPath();
    this.context.moveTo(begin.x, begin.y);
    this.context.lineTo(end.x, end.y);
    this.context.lineWidth = 4;
    this.context.strokeStyle = color;
    this.context.stroke();
  }

}
