import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, LoadingController,Nav } from 'ionic-angular';

import { Storage } from '@ionic/storage';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ListPage } from '../pages/list/list';
import {MySlidePage} from '../pages/my-slide/my-slide';
import {InfoPage} from '../pages/info/info';
import { ProgramsListPage } from '../pages/program-list/program-list';
import { ProgramDetailsPage} from '../pages/program-details/program-details';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
loader: any;
  // make HelloIonicPage the root (or first) page
 // rootPage: any = HelloIonicPage;
 rootPage: any = InfoPage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,public loadingCtrl: LoadingController, public storage: Storage
  ) {
    this.presentLoading();
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Hello Ionic', component: HelloIonicPage },
      { title: 'My First List', component: ListPage },
      { title: 'My Slide', component: MySlidePage },
      { title: 'My Info Page', component: InfoPage },
       { title: 'My Programs', component: ProgramsListPage },
       { title: 'My Programs Details', component: ProgramDetailsPage }
    ];
  }


presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Authenticating...",
      duration: 500
    });
    loader.present();
  }
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.storage.get('introShown22').then((result) => {
 
        if(result){
          this.rootPage = ProgramsListPage;
        } else {
          this.rootPage = InfoPage;
          this.storage.set('introShown22', true);
        }
 
    
 
      });
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
  
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
