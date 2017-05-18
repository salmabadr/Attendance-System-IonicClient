import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the ScanResult page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-scan-result',
  templateUrl: 'scan-result.html',
})
export class ScanResult {
  public scannedText: string;
  //public token:any="000";
  constructor(public navCtrl: NavController, public navParams: NavParams,private storage:Storage) {
  }

  ionViewDidLoad() {
    this.scannedText = this.navParams.get("scannedText");
    console.log(' ScanResult', this.scannedText);
    console.log("retrive from storge")
    this.storage.get("user").then((value)=>{
      console.log("value",value);
      //this.token=value.token;

    }).catch((error)=>{console.log("error",error)})
  }

}
