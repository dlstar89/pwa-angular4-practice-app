import { routeFadeIn } from './../../_animations/animations';
import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../../_animations/animations';

@Component({
  selector: 'app-pageInfo',
  templateUrl: './pageInfo.component.html',
  styleUrls: ['./pageInfo.component.css'],
  animations: [routeFadeIn]
})
export class PageInfoComponent implements OnInit {

  arrayTechUsed = [];
  arrayThirdParty = [];
  arrayOptimizedBrowsers = [];


  constructor() { }

  ngOnInit() {
    this.arrayTechUsed.push('Angular 4');
    this.arrayTechUsed.push('HTML5');
    this.arrayTechUsed.push('CSS3');
    this.arrayTechUsed.push('ServiceWorker');
    this.arrayTechUsed.push('JavaScript');
    this.arrayTechUsed.push('TypeScript');

    this.arrayThirdParty.push('ngx-swiper-wrapper');

    this.arrayOptimizedBrowsers.push('chrome');
    this.arrayOptimizedBrowsers.push('safari');
  }

}
