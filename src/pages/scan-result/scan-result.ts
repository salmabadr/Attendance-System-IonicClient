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
      this.getAttendance();
    }).catch((error)=>{alert(error)})

  }
  getAttendance(){
    //alert(this.id);
    this.showLoading();
    this.attendance.getAttendance(this.id,this.token,this.scannedText).subscribe(data=>{
      alert("You have registered successfully for"+JSON.stringify(data.schedule.day_date))
      //alert(JSON.stringify(data.schedule.day_date))
    },error=>{alert(JSON.stringify(error))})
  }

}
