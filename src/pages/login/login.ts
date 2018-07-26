import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { WebapiServiceProvider } from '../../providers/webapi-service/webapi-service';

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
    public app: App,
    public webapi: WebapiServiceProvider,
    public alertctrl: AlertController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  //>>>>>> variable 
  //username: string;
  //password: string;
  userData = {
    "username": "",
    "password": ""
  }

  // vairable get from api
  responseData: any;

  //>>>>>>> Login function
  login() {
    /* if (this.username == "admin" && this.password == "1234") {
       // save to local storage (cookie)
       localStorage.setItem("userData", this.username);
       // redirect to home page
       this.navCtrl.setRoot(TabsPage);
     } else {
       alert('Username and Password Incorrect');
 
     }
 */

    this.webapi.postData(this.userData, 'login.php').then((result) => {
      this.responseData = result;
      //>>>>> responsel JSON data 
      //alert(JSON.stringify(this.responseData));
      if (this.responseData.userData) {
        //alert('Login Successfuly');
        let alert = this.alertctrl.create({
              title: "Login status",
              subTitle:"Login Successfuly",
              buttons: ["Dismiss"]
        });
        alert.present();
        localStorage.setItem("userData",this.userData.username);
        this.navCtrl.setRoot(TabsPage);
      } else {
        //alert('Login fail please try again');
        let alert = this.alertctrl.create({
          title: "Login status",
          subTitle:"Login fail please try again",
          buttons: ["Dismiss"]
    });
    alert.present();        
      }
    });

  }

}
