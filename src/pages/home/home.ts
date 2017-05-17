import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Requset } from '../requset/requset';
import { ScanQR } from '../scan-qr/scan-qr';
import { Tabs } from '../pages/tabs/tabs';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(public navCtrl: NavController, private storage:Storage) {

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
  ionViewDidLoad() {
   console.log("ok")
   this.storage.get("user").then((value)=>{console.log("value",value)}).catch((error)=>{console.log("error",error)})
 }

}
