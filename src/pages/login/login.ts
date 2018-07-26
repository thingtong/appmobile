import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public app: App 
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

//>>>>>> variable 
username:string;
password:string;

//>>>>>>> Login function
login(){
  if(this.username == "admin" && this.password =="1234") {
    // save to local storage (cookie)
    localStorage.setItem("userData",this.username);
    // redirect to home page
    this.navCtrl.setRoot(TabsPage);
  } else {
    alert('Username and Password Incorrect');

  }

}
  
}
