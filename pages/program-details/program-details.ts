

import { Component,ViewChild } from '@angular/core';

import {MenuController, NavController, NavParams,Slides } from 'ionic-angular';
//import {Pipe,PipeTransform} from 'angular2/core';

@Component({
  selector: 'program-details-page',
  templateUrl: 'program-details.html',
  
  //pipes:[NewlinePipe],
})
/*@Pipe({ name: 'newline' })
export class NewlinePipe implements PipeTransform {
    transform(value: string, args: string[]): any {
        return value.replace(/(?:\r\n|\r|\n)/g, '<br />');
    }
}*/
export class ProgramDetailsPage {
  @ViewChild('mySlider') slider: Slides;
  selectedProgram: any;
  


  constructor(public menu: MenuController,public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.menu.enable(false);
     this.selectedProgram = navParams.get('program');
  }


   onSlideChanged() {
    let previousIndex = this.slider.getPreviousIndex();
    let currentIndex = this.slider.getActiveIndex();
    console.log('Previous index is', previousIndex, 'Current index is', currentIndex);
  }

  onSlideMove(ev: any) {
    console.log('Slide moving', ev);
  }

  goToPrevSlide() {
    this.slider.slidePrev();
  }

  goToNextSlide() {
    this.slider.slideNext();
  }

  goToSlide(index: number) {
    this.slider.slideTo(index);
  }

  getIndex() {
    let index = this.slider.getActiveIndex();
    console.log('Current Index is', index);
  }

  getLength() {
    let length = this.slider.length();
    console.log('Current Length is', length);
  }
}
