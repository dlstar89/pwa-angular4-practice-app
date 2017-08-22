import { routeFadeIn } from '../../_animations/animations';
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-pageCamera',
  templateUrl: './pageCamera.component.html',
  styleUrls: ['./pageCamera.component.css'],
  animations: [routeFadeIn]
})
export class PageCameraComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild('video') video: any;
  @ViewChild('canvas') canvas: any;

  camera: HTMLVideoElement;
  mediaStream: MediaStream;

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.camera) {
      this.camera.pause();
      this.camera.src = '';
      this.mediaStream.getTracks()[0].stop();
    }
  }

  ngAfterViewInit() {
    this.camera = this.video.nativeElement;
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
          this.mediaStream = stream;
          this.camera.src = window.URL.createObjectURL(stream);
          this.camera.play();
        });
    }
  }

  capture(event) {
    const context = this.canvas.nativeElement.getContext('2d');
    context.drawImage(this.camera, 0, 0, this.camera.clientWidth, this.camera.clientHeight);
  }
}
