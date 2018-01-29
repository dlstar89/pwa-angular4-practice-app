// import { sourceUrl } from '@angular/compiler';
import { routeFadeIn } from '../../_animations/animations';
import { AfterViewInit, Component, OnDestroy, OnInit, Optional, ViewChild } from '@angular/core';

@Component({
  selector: 'app-pageCamera',
  templateUrl: './pageCamera.component.html',
  styleUrls: ['./pageCamera.component.css'],
  animations: [routeFadeIn]
})
export class PageCameraComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild('video') video: any;
  @ViewChild('canvas') canvas: any;
  @ViewChild('cameraSources') cameraSources: HTMLSelectElement;

  camera: HTMLVideoElement;
  mediaStream: MediaStream;
  cameras: any[] = [];
  mySelect: string;
  selectedCamera: string;

  constructor() { }

  ngOnInit() {
    this.camera = this.video.nativeElement;
  }

  ngOnDestroy() {
    if (this.camera) {
      this.camera.pause();
      this.camera.src = '';
    }

    if (this.mediaStream) {
      this.mediaStream.getTracks().forEach(function (track) {
        track.stop();
      });
    }
  }

  ngAfterViewInit() {
    setTimeout(() => { this.initDevices(); }, 1000);
  }

  /**Find all video devices */
  initDevices() {
    navigator.mediaDevices.enumerateDevices()
      .then(deviceInfos => {
        for (let i = 0; i !== deviceInfos.length; ++i) {
          const deviceInfo = deviceInfos[i];

          if (deviceInfo.kind === 'videoinput') {
            this.cameras.push({
              value: deviceInfo.deviceId,
              label: deviceInfo.label
            });
          }
        }
      }).then(() => {
        this.mySelect = this.cameras[0].value;
        this.getStream({ value: this.cameras[0] });
      });
  }

  capture(event) {
    const context = this.canvas.nativeElement.getContext('2d');
    context.drawImage(this.camera, 0, 0, this.camera.clientWidth, this.camera.clientHeight);
  }

  getStream(event) {
    if (this.mediaStream) {
      this.mediaStream.getTracks().forEach(track => {
        track.stop();
      });
    }

    console.log(event);
    this.selectedCamera = event.value.label;

    // { video: { facingMode: { exact: "environment" } } }
    // { video: { facingMode: { exact: "user" } } }

    const constraints = {};
    constraints['video'] = {
      optional: [{ sourceId: event.value }]
    };

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia(constraints)
        .then(stream => {
          this.mediaStream = stream;
          this.camera.src = window.URL.createObjectURL(stream);
          this.camera.play();
        });
    }
  }
}
