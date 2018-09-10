import {Component, DoCheck, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs/internal/Subscription";

import {SearchService} from "../search.service";
import {TransferService} from "../transfer.service";
import {UrlParams} from "../url-params";

const favoriteStorage = 'favoriteStorage';

@Component({
  selector: 'flats-list-app',
  templateUrl: './flats-list.component.html',
  styleUrls: ['./flats-list.component.css']
})
export class FlatsListComponent implements OnInit, DoCheck {
  trueResponse = true;

  // itemsFlat: any[] = [];
  // starActiveIndicator = [];
  // startParams: UrlParams = {
  //   numberPage: 1,
  //   city: 'durham'
  // };

  itemsFlat;
  city: string = 'durham';
  private subscription: Subscription;
  id: number  = 1;

  favoriteArr = JSON.parse(localStorage.getItem(favoriteStorage)) || [];

  constructor(private router: Router, private activateRoute: ActivatedRoute, private  searchService: SearchService, private transferService: TransferService) {
  }

  toggleActive(index){
    // this.starActiveIndicator[index] = !this.starActiveIndicator[index];
    this.itemsFlat[index].starActiveIndicator = !this.itemsFlat[index].starActiveIndicator;
    let count = true;
    this.favoriteArr.forEach((prop, i) =>{
      if (prop.lister_url === this.itemsFlat[index].lister_url ){
        this.favoriteArr.splice(i, 1);
        count = false;
      }
    });
    if (count){
      this.favoriteArr.push(this.itemsFlat[index]);
    }
    localStorage.setItem(favoriteStorage, JSON.stringify(this.favoriteArr));
    console.log(this.favoriteArr);
  }


  ngOnInit() {

    this.transferService.transferArray.subscribe(arr => {

      console.log('this.-----transferService.transf_erArray.subscribe');
      console.log(this.itemsFlat);
      this.itemsFlat = arr;
      // this.itemsFlat = arr.map( item => item );
      console.log(this.itemsFlat);

    });

    // this.subscription = this.activateRoute.params.subscribe(params=>{this.id = params['id']});

    // console.log(this.id);

    // this.transferService.subjectParams.subscribe(params => {
    //   this.setParams(params);
    // });




    // this.transferService.subjectParams.subscribe(params => {
    //   this.setParams(params);
    // });

    // console.log(this.city);

    // this.setParams(this.startParams);

  }

  // setParams(params){
  //   this.searchService.sendReqFromSubject(params).subscribe(data => {
  //     if (data.length){
  //       this.trueResponse = true;
  //       // this.starActiveIndicator = [];
  //       this.itemsFlat = data;
  //       data.forEach((item, i) => {
  //         this.favoriteArr.forEach(prop =>{
  //           if (item.lister_url === prop.lister_url){
  //             // console.log('Какое совпадение');
  //             this.itemsFlat[i].starActiveIndicator = true;
  //           }
  //         })
  //       });
  //       console.log(this.itemsFlat);
  //     } else{
  //       this.trueResponse = false;
  //     }
  //   });
  // }

  // setParams(params){
  //   this.searchService.sendReqFromSubject(params).subscribe(data => {
  //     if (data.length){
  //       // this.trueResponse = true;
  //       // this.starActiveIndicator = [];
  //       // this.itemsFlat = data;
  //       this.transferService.transferData(data);
  //       // data.forEach((item, i) => {
  //       //   this.favoriteArr.forEach(prop =>{
  //       //     if (item.lister_url === prop.lister_url){
  //       //       // console.log('Какое совпадение');
  //       //       this.itemsFlat[i].starActiveIndicator = true;
  //       //     }
  //       //   })
  //       // });
  //       // console.log(this.itemsFlat);
  //     } else{
  //       this.trueResponse = false;
  //     }
  //   });
  // }




  ngDoCheck(){

    // console.log(this.itemsFlat.length);

  }

}







// @Input() itemsFlat: any;
// falseResponse = !this.trueResponse;
// visible:boolean = true;
// data;
// items: Phone[] = [];
// items: any[] = [];

// this.searchService.getFlats().subscribe((data) => {
//     this.data = data;
//     this.items = this.data.response.listings;
//     console.log('ngAfterViewInit in the ARROW');
//    });
//     console.log('ngAfterViewInit');

// this.searchService.getData().subscribe((data) => {
//   this.data = data;
//   this.items = this.data.response.listings;
//   console.log('ngOnChanges in the ARROW');
// });
// console.log('ng On hanges');

// this.items = this.searchService.getRespond();
// this.searchService.sendRequestNestoria();

// this.items = this.searchService.returnFlatList();
// this.searchService.getFlats().subscribe(data => this.itemsFlat=data);

// this.searchService.getDataNestoria();

// this.itemsFlat = this.searchService.getDataNestoria().subscribe((data) => {
//   // this.data = data;
//   // this.items = this.data.response.listings;
//   console.log('ngOnInit');
//   return this.data.response.listings
// });
// this.searchService.sendRequestNestoria().subscribe(data => this.itemsFlat=data);
//  this.searchService.getFlats().subscribe(data => this.itemsFlat=data);
// this.itemsFlat = this.searchService.getFlats();

// this.trueResponse = this.searchService.getTrueData();
// this.itemsFlat;
// this.itemsFlat = this.itemsFlatt;
