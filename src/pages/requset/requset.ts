import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ScanQR } from '../scan-qr/scan-qr';
import { HomePage } from '../home/home';

/**
 * Generated class for the Requset page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-requset',
  templateUrl: 'requset.html',
})
export class Requset {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Requset');
  }
  goHome(){
    this.navCtrl.push(HomePage)
  }
  goForRequset(){
    this.navCtrl.push(Requset)
  }
  goToScan(){
    this.navCtrl.push(ScanQR)
  }

}
