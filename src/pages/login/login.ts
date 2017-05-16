import { Component } from '@angular/core';
import { IonicPage, NavController, Loading, LoadingController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Tabs } from '../tabs/tabs';
import { AuthService} from '../../providers/auth-service';
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
  constructor(public loadingCtrl: LoadingController,public navCtrl: NavController, public navParams: NavParams,private auth:AuthService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
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
    this.auth.login("seif","111111").subscribe(data=>{
      this.navCtrl.setRoot(Tabs)
    },errors=>{
      console.log("errors:",errors)
    })



  }

}
