import { GeneralUtilsService } from '../../services/generalUtils.service';
import { fadeInAnimation } from './../../_animations/animations';
import { Component, HostBinding, OnInit } from '@angular/core';
import { routeFadeIn } from '../../_animations/animations';

@Component({
  selector: 'app-pageHome',
  templateUrl: './pageHome.component.html',
  styleUrls: ['./pageHome.component.css'],
  animations: [routeFadeIn]
})
export class PageHomeComponent implements OnInit {

  constructor(public generalUtils: GeneralUtilsService ) { }

  ngOnInit() {
  }



}
