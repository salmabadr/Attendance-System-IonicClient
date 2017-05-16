import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Requset } from '../requset/requset';
import { ScanQR } from '../scan-qr/scan-qr';
import { Tabs } from '../pages/tabs/tabs';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(public navCtrl: NavController) {
    
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
