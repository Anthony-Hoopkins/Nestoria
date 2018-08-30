import {AfterContentInit, Component, DoCheck, Input, OnInit} from "@angular/core";
import {Phone} from "../phone";
import {SearchService} from "../search.service";
import {TransferService} from "../transfer.service";

@Component({
  selector: 'app-main-display',
  templateUrl: './main-display.component.html',
  styleUrls: ['./main-display.component.css']
})
export class MainDisplayComponent implements OnInit, DoCheck/*AfterContentChecked*//*, OnChanges*/  {
  // @Input() itemsFlat: any;
  trueResponse = true;
  falseResponse = !this.trueResponse;

  city:string = 'durham';
  itemsFlat:any[] = [];

  data;
  // items: Phone[] = [];
  items: any[] = [];
  // itemsFlat;

  constructor(private  searchService: SearchService, private transferService: TransferService) {}

  ngOnInit() {
    this.city = this.transferService.getDataCity();
    // this.searchService.addRegionOnRequestUrl(this.city);
    console.log(this.city);
    // this.searchService.getFlats().subscribe(data => this.itemsFlat=data);
    this.searchService.sendRequestNestoria();
    this.items = this.searchService.getData();
    this.itemsFlat = this.searchService.getDataNestoria();
    console.log(this.itemsFlat);
  }

  ngDoCheck(){
    if (!this.itemsFlat.length ) {
      this.trueResponse = false;
      this.falseResponse = true;
      console.log(this.trueResponse);
    }else if(!this.trueResponse){
      this.trueResponse = true;
      this.falseResponse = false;
    }
  }

  ngOnChanges(){
    // this.searchService.getFlats().subscribe(data => this.itemsFlat=data);
  }

  // private getTrueResponce() {
  //   this.trueResponse = this.searchService.getTrueData();
  //   console.log(this.trueResponse);
  // }
}

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
