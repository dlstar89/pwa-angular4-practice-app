import { startWith } from 'rxjs/operator/startWith';
import { GeneralUtilsService } from './../../services/generalUtils.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { routeFadeIn } from '../../_animations/animations';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper/dist';
import { SwiperComponent } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-pagePages',
  templateUrl: './pagePages.component.html',
  styleUrls: ['./pagePages.component.css'],
  animations: [routeFadeIn]
})
export class PagePagesComponent implements OnInit, AfterViewInit {

  public config: SwiperConfigInterface = {
    initialSlide: 1,
    scrollbar: '.swiper-scrollbar',
    direction: 'horizontal',
    slidesPerView: 1,
    scrollbarHide: false,
    keyboardControl: true,
    mousewheelControl: true,
    scrollbarDraggable: true,
    scrollbarSnapOnRelease: true,
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev'
  };

  @ViewChild(SwiperComponent) swiperView: SwiperComponent;

  colors = ['white', 'orange', 'red', 'violet'];

  constructor(public utils: GeneralUtilsService) { }

  ngOnInit() {

  }

  public ngAfterViewInit(): void {

  }

  onIndexChange(event) {

  }
}
