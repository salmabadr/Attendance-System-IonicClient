import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPage } from '../list/list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  goHome(){
    this.navCtrl.push(ListPage)
  }
  goForRequset(){
    this.navCtrl.push(ListPage)
  }
  goToScan(){
    this.navCtrl.push(ListPage)
  }

}
