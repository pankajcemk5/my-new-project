import { Injectable } from '@angular/core';

@Injectable()
export class CommonService {

  constructor() { }
cars = ["Ford","Lotus","Chevrolet","Ferrari"];

myData(){
return "Returning the data";
}

}
