import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Attendance} from '../../providers/attendance';

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
  public token:any="000";
  public id:any;
  loading: Loading;
  public obj:any;
  constructor(public attendance:Attendance,public loadingCtrl: LoadingController,public navCtrl: NavController, public navParams: NavParams,private storage:Storage) {
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  ionViewDidLoad() {
    this.scannedText = this.navParams.get("scannedText");
    console.log(' ScanResult', this.scannedText);
    console.log("retrive from storge")
    this.storage.get("user").then((value)=>{
      console.log("value",value);
      this.token=value.token;
      this.id=value.id;

    }).catch((error)=>{console.log("error",error)})
  }
  getAttendance(){
    this.showLoading();
    this.attendance.getAttendance(this.id,this.token,this.scannedText).subscribe(data=>{
      this.obj=data;
    },error=>{})
  }

}
