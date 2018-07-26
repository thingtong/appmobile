import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WebapiServiceProvider } from '../../providers/webapi-service/webapi-service';

/**
 * Generated class for the CoursedetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-coursedetail',
  templateUrl: 'coursedetail.html',
})
export class CoursedetailPage {

  //>>>>>>>>>>>>>function course detail
  coursedetail(id) {
    //alert(id);
  }
  //>>>>>>>>>>>>

  //variable from api JSON
  responsedata: any; //array
  // variable request from course page
  getid:number;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public webapi: WebapiServiceProvider,
  ) 
  {
    //get variable id >> getid (from nav Params)
    this.getid = navParams.get('id');

  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad CoursedetailPage');
    this.webapi.getData('feed_course_detail.php?cid='+this.getid).then((result) => {
      //console.log(result);
      //display data to app
      this.responsedata = result;
    });
  }

}
