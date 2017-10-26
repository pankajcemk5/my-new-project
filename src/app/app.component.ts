import { Component } from '@angular/core';
import {CommonService} from './common.service'; 
import {trigger,state,style,transition,animate,keyframes} from '@angular/animations'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    trigger('myAwesomeAnimations',[
      state('small',style({
        transform: 'scale(1)'
      })),
      state('large',style({
        transform: 'scale(1.2)'
      })),
      transition('small <=> large', animate('300ms ease-in',style({
        transform: 'translateY(40px)'
      })))
    ]),
  ]
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
  state:string = 'small';
  clickEvent(event){
    this.clickCount++;
    console.log(event);
    this.state = (this.state === 'small'?'large':'small');
  }
  mouseEnter(event){
    this.clickCount--;
  }
}
