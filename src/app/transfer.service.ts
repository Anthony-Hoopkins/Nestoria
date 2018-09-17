import { Injectable } from '@angular/core';
import {Subject} from "rxjs/internal/Subject";
import {UrlParams} from "./url-params";
import {InterfaceCity} from "./interface-city";

@Injectable()
export class TransferService {

  urlParams:UrlParams = {
    numberPage: 1,
    city: 'durham',
    listing_type: 'sale',
    minPrice: 0,
    maxPrice: 999999999,
    property: 'all',
    minRoom: 0,
    maxRoom: 999,
  };

  subjectParams = new Subject<UrlParams>();
  spinnerOnOff = new Subject<boolean>();

  changeCity(newParams:InterfaceCity){

    this.urlParams = {...this.urlParams, ...newParams};
    this.subjectParams.next(this.urlParams);

  }

  setData(obj:UrlParams){

    this.urlParams = {...this.urlParams, ...obj};
    this.urlParams.numberPage = obj.numberPage ? obj.numberPage : 1;
    this.subjectParams.next(this.urlParams);

  }

  setPagArr(num: number, total:number){

    const arr = [];
    if (total > 6) {
      if (num >= 1 && num <= 6) {
        for (let i = 1; i <= (num + 5 > total ? total : num + 5) ; i++) {
          arr.push(i);
        }
      } else if (num > 6 && num + 5 < total) {
        let x = num - 5;
        let max = num +5 < total ? num +5 : total;
        for (let i = x; i <= max; i++) {
          arr.push(i);
        }
      } else {
        for (let i = num - 5; i <= total; i++) {
          arr.push(i);
        }
      }
    }else {
      for (let i =  1; i <= total; i++) {
        arr.push(i);
      }
    }
    return arr;
  }

}
