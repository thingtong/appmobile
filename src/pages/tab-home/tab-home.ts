import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App,AlertController,Platform } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { UrlSerializer } from 'ionic-angular/navigation/url-serializer';
import { RegisterPage } from '../register/register';
import { Device } from '@ionic-native/device';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
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
    public app: App,
    public device:Device,
    public alertCtrl:AlertController,
    public patform:Platform,
    public camera:Camera,
    public barcodeScanner:BarcodeScanner
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

    if (!this.patform.is('core')){
      let alert = this.alertCtrl.create({
        title: "Detail Mobile",
        subTitle:this.device.model+"\n"+ this.device.platform+"\n"+this.device.version,
        buttons: ["Dismiss"]

      });

      alert.present();

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

tekeCamera(){
  if (!this.patform.is('core')){

  const options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }
  
  this.camera.getPicture(options).then((imageData) => {
   // imageData is either a base64 encoded string or a file URI
   // If it's base64 (DATA_URL):
   let base64Image = 'data:image/jpeg;base64,' + imageData;
  }, (err) => {
   // Handle error
  }
  );
  }

}

Scanbarcode(){
  if (!this.patform.is('core')){
  this.barcodeScanner.scan().then(barcodeData => {
    console.log('Barcode data', barcodeData);
    alert(JSON.stringify(barcodeData));
   }).catch(err => {
       console.log('Error', err);
   });
  }

}



}
