import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { UrlSerializer } from 'ionic-angular/navigation/url-serializer';
import { RegisterPage } from '../register/register';

/**
 * Generated class for the TabHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab-home',
  templateUrl: 'tab-home.html',
})
export class TabHomePage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public app: App
  ) {
  }

  //variable
  userDetail: any;
  loginStatus: any;

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabHomePage');
    // check local stoage (check cookie)
    let data = localStorage.getItem("userData")
    //alert(data);
    if (data == null) {
      this.userDetail = "Guest";
      // check null data for Logout botton
      this.loginStatus= false;
    } else {
      this.userDetail = data;
      this.loginStatus = true;
    }

  }


  //>>>> function login 
  showLogin() {
    this.app.getRootNav().push(LoginPage);
  }
  logout() {
    localStorage.removeItem("userData");
    this.navCtrl.setRoot(TabHomePage);

  }

  showRegister(){
      this.app.getRootNav().push(RegisterPage)

  }


}
