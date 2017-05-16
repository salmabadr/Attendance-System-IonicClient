import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Requset } from '../requset/requset';

import { HomePage } from '../home/home';

/**
 * Generated class for the ScanQR page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-scan-qr',
  templateUrl: 'scan-qr.html',
})
export class ScanQR {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScanQR');
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