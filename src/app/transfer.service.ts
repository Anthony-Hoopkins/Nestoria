import { Injectable } from '@angular/core';
import {SearchService} from "./search.service";
import {Subject} from "rxjs/internal/Subject";


@Injectable()
export class TransferService {

  constructor(private searchService: SearchService) {}

  private city:string = 'cotham';
  urlParams = {
    numberPage: 1,
    city: 'durham'
  };
  subjectParams = new Subject();

  setData(cityName: string){

    if (this.urlParams.city !== cityName){
      this.urlParams.numberPage = 1;
      this.urlParams.city = cityName;
      this.subjectParams.next(this.urlParams);
      return;
    }
    console.log('CСовпадение!!!');
  }

  setNumPage(numPage: number){

    this.urlParams.numberPage = numPage;
    this.subjectParams.next(this.urlParams);

  }

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
      // let x = 7%num;
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
    console.log(arr);
    return arr;
  }

}
