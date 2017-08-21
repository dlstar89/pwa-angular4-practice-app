import { PageFormComponent } from './pages/pageForm/pageForm.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MyMaterialModuleModule } from './modules/myMaterialModule.module';

import { ShellComponent } from './components/shell/shell.component';
import { LoaderComponent, LoadingService } from './components/loader/loader.component';

import { ApiUtil } from './services/ApiUtil';
import { RoutingModule } from './app.routing';
import { GeneralUtilsService } from './services/generalUtils.service';

import { PagePagesComponent } from './pages/pagePages/pagePages.component';
import { PageInfoComponent } from './pages/pageInfo/pageInfo.component';
import { PageHomeComponent } from './pages/pageHome/pageHome.component';

import 'hammerjs';

import { SwiperModule, SwiperConfigInterface } from 'ngx-swiper-wrapper';
const SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto',
  keyboardControl: true
};



@NgModule({
  declarations: [
    ShellComponent,
    LoaderComponent,

    PageHomeComponent,
    PageInfoComponent,
    PagePagesComponent,
    PageFormComponent
  ],
  imports: [
    MyMaterialModuleModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,

    RoutingModule,

    SwiperModule
  ],
  providers: [LoadingService, ApiUtil, GeneralUtilsService],
  bootstrap: [ShellComponent]
})
export class AppModule { }
