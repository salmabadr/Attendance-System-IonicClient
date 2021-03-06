import { Component } from '@angular/core';
import { IonicPage, NavController, Loading, LoadingController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Tabs } from '../tabs/tabs';
import { AuthService} from '../../providers/auth-service';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  // providers:[AuthService]
})
export class Login {
  loading: Loading;
  user:any={username:"",password:""};
  constructor(public loadingCtrl: LoadingController ,public navCtrl: NavController,
     public navParams: NavParams, private auth: AuthService, public storage:Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
    this.clearKeys();
    console.log("clear cashe")
  }

  clearKeys() {
   this.storage.clear().then(() => {
     console.log('Keys have been cleared');
   });
 }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }
  login(){
    this.showLoading();
    this.auth.login(this.user.username,this.user.password).subscribe(data=>{
      console.log("data :",data)
      this.navCtrl.setRoot(Tabs)
    },errors=>{
      console.log("errors:",errors)
    })



  }

}
