import { Component } from '@angular/core';
import {CommonService} from './common.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private commonData : CommonService){

  }
  carData = {};
  methodString:string = "";
  ngOnInit(){
    this.carData = this.commonData.cars;
    this.methodString = this.commonData.myData();
  }

  title = "Angular 4";
  place = {
    "Location" : "New york",
    "Country" : "USA"
  };
  name = ["John","Bill"];
  showlocation = true;
  showCountry = true;

  buttonStatusBoolean = false;
  buttonStatusString = "disableNow";

  clickCount = 0;
  clickEvent(event){
    this.clickCount++;
    console.log(event);
  }
  mouseEnter(event){
    this.clickCount--;
  }
}
