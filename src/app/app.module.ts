// import { WorkerAppModule } from '@angular/platform-webworker';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';



import { environment } from '../environments/environment';


import { MyMaterialModuleModule } from './modules/myMaterialModule.module';

import { ShellComponent } from './components/shell/shell.component';
import { LoaderComponent, LoadingService } from './components/loader/loader.component';

import { ApiUtilsService } from './services/ApiUtilsService.service';
import { RoutingModule } from './app.routing';
import { GeneralUtilsService } from './services/generalUtils.service';
import { MessagingService } from './services/messaging.service';

import { PageMessagesComponent } from './pages/pageMessages/pageMessages.component';
import { PagePagesComponent } from './pages/pagePages/pagePages.component';
import { PageInfoComponent } from './pages/pageInfo/pageInfo.component';
import { PageHomeComponent } from './pages/pageHome/pageHome.component';
import { PageFormComponent } from './pages/pageForm/pageForm.component';
import { PageCameraComponent } from './pages/pageCamera/pageCamera.component';

import 'hammerjs';

import { SwiperModule } from 'ngx-swiper-wrapper';
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
    PageMessagesComponent,
    PageInfoComponent,
    PagePagesComponent,
    PageFormComponent,
    PageCameraComponent
  ],
  imports: [
    ServiceWorkerModule,
    MyMaterialModuleModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,

    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,

    RoutingModule,

    SwiperModule,

    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production})
  ],
  providers: [LoadingService, ApiUtilsService, GeneralUtilsService, MessagingService],
  bootstrap: [ShellComponent]
})
export class AppModule { }
