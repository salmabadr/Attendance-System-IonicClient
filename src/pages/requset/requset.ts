import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController } from 'ionic-angular';
import {AppSettings} from '../app-settings';
import { Storage } from '@ionic/storage';
import { Attendance} from '../../providers/attendance';

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
  loading: Loading;
  public msg:string="";
  public token:any="000";
  public id:any;
  public user_id:any;
  public day_id:any;
  public days:Array<any>=[];
  public select:string="select day";
  constructor(public attendance:Attendance,public loadingCtrl: LoadingController, public navCtrl: NavController, public navParams: NavParams,private storage:Storage) {
  }
  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Requset');
    //alert("ok")
    this.storage.get("user").then((value)=>{
      console.log("value",value);
      this.token=value.token;
      this.id=value.track.id;
      this.user_id=value.id;
      this.getSchedule();
    }).catch((error)=>{alert(error)})
  }

  getSchedule(){
    //this.showLoading();
    this.attendance.getSchedule(this.id,this.token).subscribe(data=>{
      //alert(JSON.stringify(data))
      //this.loading.dismiss();
      console.log("get schedule")
      this.days=data;
    },error=>{
      //this.loading.dismiss();
      alert(JSON.stringify(error))
    })
  }
  askForPermission(){
    //this.showLoading();
    //alert(this.id);
      //alert(this.user_id);
      console.log(this.token)
    this.attendance.getPermission(this.user_id,this.day_id,this.token).subscribe(data=>{
      //this.loading.dismiss();
      this.msg="Your request has been sent"
      //alert(data)
    },error=>{
      //this.loading.dismiss();
      console.log(JSON.stringify(error))
      alert(JSON.stringify(error._body))})
  }
  showSelectValue = function(select) {
    console.log("value :",select);
	this.day_id=select;
}

ionViewDidEnter(){
  console.log("page did enter")
  this.msg="";
}


}
