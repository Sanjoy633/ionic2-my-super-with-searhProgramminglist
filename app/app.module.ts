import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import {MySlidePage} from '../pages/my-slide/my-slide'
import {InfoPage} from '../pages/info/info'
import { ProgramsListPage } from '../pages/program-list/program-list';
import { ProgramDetailsPage} from '../pages/program-details/program-details';
import { Storage } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    MySlidePage,
    InfoPage,
    ProgramsListPage,
    ProgramDetailsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    MySlidePage,
    InfoPage,
    ProgramsListPage,
    ProgramDetailsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},Storage]
})
export class AppModule {}
