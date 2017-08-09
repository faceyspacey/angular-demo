import { Component } from '@angular/core';
import { Tab } from 'ionic-angular'

import { CategoriesPage } from '../categories/categories';
import { VideosPage } from '../videos/videos';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  categories = CategoriesPage;
  videos = VideosPage;

  constructor() {

  }

  tabChange(tab: Tab) {
    // this.selectedIndex = tab.index;
    // console.log(this.selectedIndex);
    // //index equals 0/other to add/remove tab home click event
    // if(0 == this.selectedIndex){
    //   this.tabHomeAddClickEvent();
    // }
    // else{
    //   this.tabHomeRemoveClickEvent();
    // }
  }
}
