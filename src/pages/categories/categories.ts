import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ParamService } from '../../services/params'

@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html'
})
export class CategoriesPage {
  cards = [
    {
      imageUrl: 'assets/categories/angular.jpg',
      title: 'Angular',
      subtitle: '41 Videos'
    },
    {
      imageUrl: 'assets/categories/react.jpg',
      title: 'React',
      subtitle: '64 Videos'
    },
    {
      imageUrl: 'assets/categories/vue.jpg',
      title: 'Vue',
      subtitle: '72 Videos'
    },
    {
      imageUrl: 'assets/categories/meteor.jpg',
      title: 'Meteor',
      subtitle: '28 Videos'
    }
  ];

  constructor(
    public navCtrl: NavController,
    public paramService: ParamService
  ) {

  }

  selectCategory(card) {
    // alert('TITLE: '+card.title)
    this.navCtrl.parent.select(1)
    this.paramService.paramsData.selectedCategory = card.title
  }
}
