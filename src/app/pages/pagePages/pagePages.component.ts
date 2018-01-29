import { startWith } from 'rxjs/operator/startWith';
import { GeneralUtilsService } from './../../services/generalUtils.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { routeFadeIn } from '../../_animations/animations';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper/dist';
import { SwiperComponent } from 'ngx-swiper-wrapper';
import '../../../../node_modules/swiper/dist/css/swiper.min.css';


@Component({
  selector: 'app-pagePages',
  templateUrl: './pagePages.component.html',
  styleUrls: ['./pagePages.component.css'],
  animations: [routeFadeIn]
})
export class PagePagesComponent implements OnInit {

  /**
   * Configuration for Swiper
   */
  public config: SwiperConfigInterface;
  // public config: SwiperConfigInterface = {
  //   initialSlide: 1,
  //   scrollbar: '.swiper-scrollbar',
  //   direction: 'horizontal',
  //   slidesPerView: 1,
  //   scrollbarHide: false,
  //   keyboardControl: true,
  //   mousewheelControl: false,
  //   scrollbarDraggable: true,
  //   scrollbarSnapOnRelease: true,
  //   pagination: '.swiper-pagination',
  //   paginationClickable: true,
  //   nextButton: '.swiper-button-next',
  //   prevButton: '.swiper-button-prev'
  // };

  DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
    initialSlide: 1,
    direction: 'horizontal',
    slidesPerView: 1,
    pagination: true,
    keyboard: true,
    scrollbar: false,
    
    // scrollbar: '.swiper-scrollbar',
    // scrollbarHide: false,
    // mousewheelControl: false,
    // scrollbarDraggable: true,
    // scrollbarSnapOnRelease: true,
    // paginationClickable: true,
    // nextButton: '.swiper-button-next',
    // prevButton: '.swiper-button-prev'
  };

  @ViewChild(SwiperComponent) swiperView: SwiperComponent;

  colors = ['white', 'orange', 'red', 'violet'];

  constructor(public utils: GeneralUtilsService) { }

  ngOnInit() {
    // this.config.initialSlide = 1;
  }

  onIndexChange(_currentPage) {
    console.log('Page: ', _currentPage);
  }
}
