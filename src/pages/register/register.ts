import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WebapiServiceProvider } from '../../providers/webapi-service/webapi-service';
import { TabsPage } from '../tabs/tabs';


/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public webapi:WebapiServiceProvider
    
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

//variable by form register
userData = {
  "fullname":"",
  "email":"",
  "tel":"",
  "username":"",
  "password":""
}
//variable from json 
responseData: any;
// funciton register
register(){
  this.webapi.postData(this.userData,'register.php').then((result)=>{
    this.responseData = result;
      if(this.responseData.userData){
          alert('Register Successfuly');
          this.navCtrl.setRoot(TabsPage);
      } else {
          alert('try again');
      }
  });
}

}
