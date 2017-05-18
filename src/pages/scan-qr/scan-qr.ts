import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Requset } from '../requset/requset';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { ScanResult } from '../scan-result/scan-result';

/**
 * Generated class for the ScanQR page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-scan-qr',
  templateUrl: 'scan-qr.html',
   providers:[BarcodeScanner]
})
export class ScanQR {
  public scannedText: string="no thing";
  public buttonText: string;
  public loading: boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams, private barcodeScanner: BarcodeScanner) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScanQR');
    this.buttonText = "Scan";
    this.loading = false;
  }
  ionViewDidEnter(){
    console.log("page did enter")
    this.buttonText = "Scan";
    this.loading = false;
    this.scannedText="no thing"
  }
  public scanQR() {
  this.buttonText = "Loading..";
  this.loading = true;

  this.barcodeScanner.scan().then((barcodeData) => {
    if (barcodeData.cancelled) {
      console.log("User cancelled the action!");
      this.buttonText = "Scan";
      this.loading = false;
      return false;
    }
    console.log("Scanned successfully!");
    console.log(barcodeData);
    this.scannedText=barcodeData.text
    this.goToResult(barcodeData);
  }, (err) => {
    console.log(err);
  });
}

private goToResult(barcodeData) {
  this.navCtrl.push(ScanResult, {
    scannedText: barcodeData.text
  });
}


}
