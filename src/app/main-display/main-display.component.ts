import {AfterViewInit, Component, DoCheck, OnDestroy, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs/internal/Subscription";

import {SearchService} from "../search.service";
import {TransferService} from "../transfer.service";
import {UrlParams} from "../url-params";


const favoriteStorage = 'favoriteStorage';

@Component({
  selector: 'app-main-display',
  templateUrl: './main-display.component.html',
  styleUrls: ['./main-display.component.css',
    '../spinner.css']
})
export class MainDisplayComponent implements OnInit, AfterViewInit, OnDestroy, DoCheck {

  startParams: UrlParams = {
    numberPage: 1,
    city: 'Manchester'
  };

  itemsFlat;
  private subscription: Subscription;
  private querySubscription: Subscription;

  id: number  = 1;
  spinnerOnOff;

  trueResponse = true;
  loadingVar:boolean = true ;

  constructor(private router: Router, private activateRoute: ActivatedRoute, private  searchService: SearchService, private transferService: TransferService) {

    this.startParams.city =  localStorage.getItem('cityName') || '';

    this.querySubscription = activateRoute.queryParams.subscribe((queryParam: any) => {
        if (queryParam['city']) {
          this.startParams.city = queryParam['city'];
          localStorage.setItem('cityName', this.startParams.city);
          console.log(this.startParams.city);
          this.transferService.changeData({city: this.startParams.city});
        }
      }
    );

  }

  ngOnInit() {

    this.subscription = this.transferService.spinnerOnOff.subscribe(val =>  {
      this.spinnerOnOff = val;
      console.log(val);
    });

    this.transferService.subjectParams.subscribe(params => {

      this.setParams(params);

    });

    this.setParams(this.startParams);

    console.log('ngOnInit');

  }

  setParams(params){
    this.searchService.sendReqFromSubject(params).subscribe(data => {
      if (data.length){
        // this.trueResponse = true;
        // this.starActiveIndicator = [];
        this.itemsFlat = data;

        // console.log('searchService.sendReqFromSubject(params).subscribe - finish ');
        this.transferService.spinnerOnOff.next(true);

        // console.log(data);
        // this.transferService.transferData(data);
        // data.forEach((item, i) => {
        //   this.favoriteArr.forEach(prop =>{
        //     if (item.lister_url === prop.lister_url){
        //       // console.log('Какое совпадение');
        //       this.itemsFlat[i].starActiveIndicator = true;
        //     }
        //   })
        // });
        // console.log(this.itemsFlat);
      } else{
        // this.trueResponse = false;
        console.log("No Array");
      }
    });
  }


  ngDoCheck(){
    // console.log('ngDoCheck');
    // this.loadingVar = this.loadingVar2;
  }


  ngAfterViewInit(){
    console.log('ngAfterViewInit');
    // this.loadingVar2 = true;
  }

  ngOnDestroy(){
    // this.transferService.subjectParams.unsubscribe();
    // this.searchService.sendReqFromSubject(params).unsubscribe();
    console.log('On-------------------------------------------------Destroy');
    this.subscription.unsubscribe();
    this.querySubscription.unsubscribe();
  }


//
//   toggleActive(index){
//     // this.starActiveIndicator[index] = !this.starActiveIndicator[index];
//     this.itemsFlat[index].starActiveIndicator = !this.itemsFlat[index].starActiveIndicator;
//     let count = true;
//     this.favoriteArr.forEach((prop, i) =>{
//       if (prop.lister_url === this.itemsFlat[index].lister_url ){
//         this.favoriteArr.splice(i, 1);
//         count = false;
//       }
//     });
//     if (count){
//       this.favoriteArr.push(this.itemsFlat[index]);
//     }
//     localStorage.setItem(favoriteStorage, JSON.stringify(this.favoriteArr));
//     console.log(this.favoriteArr);
//   }
//
//   setParams(params){
//     this.searchService.sendReqFromSubject(params).subscribe(data => {
//       if (data.length){
//         this.trueResponse = true;
//         // this.starActiveIndicator = [];
//         this.itemsFlat = data;
//         data.forEach((item, i) => {
//           this.favoriteArr.forEach(prop =>{
//             if (item.lister_url === prop.lister_url){
//               // console.log('Какое совпадение');
//               this.itemsFlat[i].starActiveIndicator = true;
//             }
//           })
//         });
//         console.log(this.itemsFlat);
//       } else{
//         this.trueResponse = false;
//       }
//     });
//   }
//

  //
//   itemsFlat: any[] = [];
//   city: string = 'durham';
//   private subscription: Subscription;
//   id: number  = 1;
//   // starActiveIndicator = [];
//   startParams: UrlParams = {
//     numberPage: 1,
//     city: 'durham'
//   };
//   favoriteArr = JSON.parse(localStorage.getItem(favoriteStorage)) || [];
//


    // this.loadingVar = true;
//
//     // this.subscription = this.activateRoute.params.subscribe(params=>{this.id = params['id']});
//
//     console.log(this.id);
//
//     this.transferService.subjectParams.subscribe(params => {
//       this.setParams(params);
//     });
//
//     console.log(this.city);
//
//     this.setParams(this.startParams);
//
//     // this.route.params
//     //   .pluck('userId') // получаем userId из параметров
//     //   .switchMap(userId => this.userService.getData(userId))
//     //   .subscribe(user => this.user = user);
//
//     // Observable.combineLatest(this.route.params, this.route.queryParams)
//     //   .subscribe(([params, queryParams]) => { // полученный массив деструктурируем
//     //     const userId = params['userId'];
//     //     const regionId = queryParams['regionId'];
//     //     this.load(userId, regionId);
//     //   });
//
//     // this.subscription = this.activateRoute.params.subscribe(params=>{this.id = params['id']});
//     // this.transferService.subCity.subscribe(x => console.log(`subCity: ${x} ${x}`));
//     // this.urlParams.city = 'durham';
//     // this.searchService.sendRequestNestoria();
//
//     // this.searchService.getFlats().subscribe(data => {
//     //   this.itemsFlat = data;
//     //   console.log(this.itemsFlat);
//     // }); //  !!!!!!!!
//     // this.transferService.setPagArr(this.id);
//     // this.searchService.setNumberPage(this.id);
//     // this.id = this.activateRoute.snapshot.params['id'];
//     // this.searchService.setNumberPage(this.id);
//

//
//   ngDoCheck(){
//     console.log(this.itemsFlat.length);
//     // if (!this.itemsFlat.length ) {
//     //   this.trueResponse = false;
//     // }else if(!this.trueResponse){
//     //   this.trueResponse = true;
//     // }
//
//     // console.log(this.activateRoute.snapshot);
//     // console.log(this.subscription);
//     // console.log(this.activateRoute.snapshot.queryParams);
//     // if (this.id < 1) {
//     //   this.visible = false;
//     // }
//
//   }
//
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
