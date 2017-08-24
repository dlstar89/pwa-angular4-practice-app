import { WorkerAppModule } from '@angular/platform-webworker';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MyMaterialModuleModule } from './modules/myMaterialModule.module';

import { ShellComponent } from './components/shell/shell.component';
import { LoaderComponent, LoadingService } from './components/loader/loader.component';

import { ApiUtilsService } from './services/ApiUtilsService.service';
import { RoutingModule } from './app.routing';
import { GeneralUtilsService } from './services/generalUtils.service';

import { PagePagesComponent } from './pages/pagePages/pagePages.component';
import { PageInfoComponent } from './pages/pageInfo/pageInfo.component';
import { PageHomeComponent } from './pages/pageHome/pageHome.component';
import { PageFormComponent } from './pages/pageForm/pageForm.component';
import { PageCameraComponent } from './pages/pageCamera/pageCamera.component';

import 'hammerjs';

import { SwiperModule} from 'ngx-swiper-wrapper';
// import { SwiperModule, SwiperConfigInterface } from 'ngx-swiper-wrapper';
// const SWIPER_CONFIG: SwiperConfigInterface = {
//   direction: 'horizontal',
//   slidesPerView: 'auto',
//   keyboardControl: true
// };



@NgModule({
  declarations: [
    ShellComponent,
    LoaderComponent,

    PageHomeComponent,
    PageInfoComponent,
    PagePagesComponent,
    PageFormComponent,
    PageCameraComponent
  ],
  imports: [
    MyMaterialModuleModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,

    RoutingModule,

    SwiperModule
  ],
  providers: [LoadingService, ApiUtilsService, GeneralUtilsService],
  bootstrap: [ShellComponent]
})
export class AppModule { }
