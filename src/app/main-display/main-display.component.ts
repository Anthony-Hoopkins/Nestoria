import {AfterContentInit, Component, DoCheck, Input, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs/internal/Subscription";

import {SearchService} from "../search.service";
import {TransferService} from "../transfer.service";

import {Phone} from "../phone";
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { fromEvent } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, filter, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-main-display',
  templateUrl: './main-display.component.html',
  styleUrls: ['./main-display.component.css']
})
export class MainDisplayComponent implements OnInit, DoCheck/*AfterContentChecked*//*, OnChanges*/  {
  trueResponse = true;

  itemsFlat: any[] = [];
  city: string = 'durham';
  private subscription: Subscription;
  id: number  = 1;
  startParams = {
    numberPage: 1,
    city: 'durham'
  };

  constructor(private router: Router, private  searchService: SearchService, private transferService: TransferService, private activateRoute: ActivatedRoute) {
    // this.subscription = activateRoute.params.subscribe(params=>{this.id = params['id']});
  }

  setParams(params){
    this.searchService.sendReqFromSubject(params).subscribe(data => {
      this.itemsFlat = data;
      console.log(data);
      // this.transferService.setPagArr(params.numberPage);
      this.router.navigate([`/buy/${params.numberPage}`]);
    });
  }

  ngOnInit() {

    this.subscription = this.activateRoute.params.subscribe(params=>{this.id = params['id']});

    console.log(this.id);

    this.transferService.subjectParams.subscribe(params => {
      this.setParams(params);
    });
    console.log(this.city);

    this.setParams(this.startParams);

    // this.route.params
    //   .pluck('userId') // получаем userId из параметров
    //   .switchMap(userId => this.userService.getData(userId))
    //   .subscribe(user => this.user = user);

    // Observable.combineLatest(this.route.params, this.route.queryParams)
    //   .subscribe(([params, queryParams]) => { // полученный массив деструктурируем
    //     const userId = params['userId'];
    //     const regionId = queryParams['regionId'];
    //     this.load(userId, regionId);
    //   });

    // this.subscription = this.activateRoute.params.subscribe(params=>{this.id = params['id']});
    // this.transferService.subCity.subscribe(x => console.log(`subCity: ${x} ${x}`));
    // this.urlParams.city = 'durham';
    // this.searchService.sendRequestNestoria();

    // this.searchService.getFlats().subscribe(data => {
    //   this.itemsFlat = data;
    //   console.log(this.itemsFlat);
    // }); //  !!!!!!!!
    // this.transferService.setPagArr(this.id);
    // this.searchService.setNumberPage(this.id);
    // this.id = this.activateRoute.snapshot.params['id'];
    // this.searchService.setNumberPage(this.id);

  }

  ngDoCheck(){

    if (!this.itemsFlat.length ) {
      this.trueResponse = false;
    }else if(!this.trueResponse){
      this.trueResponse = true;
    }

    // console.log(this.activateRoute.snapshot);
    // console.log(this.subscription);
    // console.log(this.activateRoute.snapshot.queryParams);
    // if (this.id < 1) {
    //   this.visible = false;
    // }

  }

  ngOnChanges(){

    // this.searchService.getFlats().subscribe(data => this.itemsFlat=data);

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
