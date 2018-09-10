import { Injectable } from '@angular/core';
import {Subject} from "rxjs/internal/Subject";
import {UrlParams} from "./url-params";

@Injectable()
export class TransferService {

  urlParams: UrlParams = {
    numberPage: 1,
    city: 'durham'
  };

  subjectParams = new Subject();
  spinnerOnOff = new Subject();
  transferCity = new Subject();


  transferArray = new Subject();
  dataFromHomePage = new Subject();

  // getCityFromHome(){
  //     let tempVal;
  //      this.dataFromHomePage.subscribe(value => {
  //       tempVal =  value;
  //       console.log(value);
  //     });
  //     return tempVal;
  // }

  changeData(obj){
    this.urlParams = {...this.urlParams, ...obj};
    this.transferCity.next(obj);
    console.log(this.urlParams);
  }

  setData(obj){
    // console.log(obj);
    // console.log(obj.city);
    // if (obj.city !== undefined && this.urlParams.city !== obj.city){
      this.urlParams.numberPage = obj.numberPage ? obj.numberPage : 1;
      this.urlParams = {...this.urlParams, ...obj};
      this.subjectParams.next(this.urlParams);
    //   return;
    // }
    // console.log('CСовпадение!!!');
  }

  transferData (arr){

    const arr2 = arr.map( item => item );
    this.transferArray.next(arr2);

  }



  // setData(cityName: string){
  //
  //   if (this.urlParams.city !== cityName){
  //     this.urlParams.numberPage = 1;
  //     this.urlParams.city = cityName;
  //     this.subjectParams.next(this.urlParams);
  //     return;
  //   }
  //   console.log('CСовпадение!!!');
  // }
  //
  // setNumPage(numPage: number){
  //
  //   this.urlParams.numberPage = numPage;
  //   this.subjectParams.next(this.urlParams);
  //
  // }

  // mySub = this.mySubject.subscribe(x => console.log(`${x} ${x}`));
  // mySub2 = this.mySubject.subscribe(x => console.log('asfgsdfg  ' + x));

  getDataCity(){

    // console.log(this.city);
    // this.subjectParams.subscribe(x => console.log(`subjectParams: ${x} ${x}`));
    // return this.subjectParams.subscribe(x => console.log(`subjectParams: ${x} ${x}`));
    // return this.city;
    // this.searchService.

  }

  setPagArr(num: number){
    const arr = [];
    if (num >= 1 && num <=6){
      for (let i = 1 ; i < num; i++ ){
        arr.push(i);
      }
      for (let i = num ; i <= num+5 ; i++){
        arr.push(i);
      }
    }else if (num > 6){
      let x = num-5;
      for (let i = x ; i <= num+5; i++ ){
        arr.push(i);
      }
    }
    return arr;
  }

}
