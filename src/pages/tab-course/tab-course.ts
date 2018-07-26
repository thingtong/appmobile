import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { WebapiServiceProvider } from '../../providers/webapi-service/webapi-service';
//import { App } from 'ionic-angular/components/app/app';
import { CoursedetailPage } from '../coursedetail/coursedetail';

/**
 * Generated class for the TabCoursePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab-course',
  templateUrl: 'tab-course.html',
})
export class TabCoursePage {

  //>>>>>>>>>>>>>function course detail
  coursedetail(id) {
    //alert(id);
    //>>>> send parameter id to course detail page
    this.app.getRootNav().push(CoursedetailPage,{id:id});
  }
  //>>>>>>>>>>>>


  //variable from api JSON
  responsedata: any; //array

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public webapi: WebapiServiceProvider,
    public app: App
  ) {
  }

  //action before pageload complete
  ionViewDidLoad() {
    //console.log('ionViewDidLoad TabCoursePage');
    this.webapi.getData('feed_course.php').then((result) => {
      //console.log(result);
      //display data to app
      this.responsedata = result;
    });
  }

}
