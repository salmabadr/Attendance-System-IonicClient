import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Requset } from '../requset/requset';
import { ScanQR } from '../scan-qr/scan-qr';
import { Tabs } from '../pages/tabs/tabs';
import { Storage } from '@ionic/storage';
import { Attendance} from '../../providers/attendance';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  late_deduction:any=0;
  late_days:any=0;
  absence_days:any=0;
  absence_deduction:any=0;
  user:any={id:0,name:"x",username:'x',track:'x',branche:'x',token:'X'};
  constructor(public attendance:Attendance,public navCtrl: NavController, private storage:Storage) {

  }

  ionViewDidLoad() {
   console.log("ok")
   this.storage.get("user").then((value)=>{
     console.log("value",value);
     this.user.id=value.id;
     this.user.name=value.name;
     this.user.username=value.username;
     this.user.track=value.track.name;
     this.user.branche=value.track.branch.name;
     this.user.token=value.token;
     console.log("token",this.user["token"]);
   }).catch((error)=>{console.log("error",error)})

   this.get_detalis()
 }
 get_detalis(){
   this.attendance.get_detalis(this.user.id).subscribe(data=>{

   },error=>{
     alert(JSON.stringify(error))
   })
 }

}
