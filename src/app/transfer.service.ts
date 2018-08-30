import { Injectable } from '@angular/core';
import {SearchService} from "./search.service";

@Injectable()
export class TransferService {

  constructor(private searchService: SearchService) {}

  private city:string = 'cotham';

  setData(cityName:string){
    this.city = cityName;
    console.log(this.city);
    this.searchService.addRegionOnRequestUrl(this.city);
  }

  getDataCity(){
    return this.city;
    // this.searchService.
  }

}
