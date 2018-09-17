import {AfterViewInit, Component, OnDestroy, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs/internal/Subscription";

import {SearchService} from "../search.service";
import {TransferService} from "../transfer.service";
import {UrlParams} from "../url-params";
import {InterfaceItem} from "../interface-item";
import {InterfaceCity} from "../interface-city";

const favoriteStorage = 'favoriteStorage';

@Component({
  selector: 'app-main-display',
  templateUrl: './main-display.component.html',
  styleUrls: ['./main-display.component.css',
    '../spinner.css']
})
export class MainDisplayComponent implements OnInit, AfterViewInit, OnDestroy {

  startParams: UrlParams = {
    numberPage: 1,
    listing_type: 'sale',
    minPrice: 0,
    maxPrice: 999999999,
    property: 'all',
    minRoom: 0,
    maxRoom: 999,
  };

  itemsFlat: InterfaceItem[];
  spinnerOnOff: boolean;
  trueResponse = true;
  starArray: InterfaceItem;
  private subscription: Subscription;
  private querySubscription: Subscription;
  private subscription2: Subscription;
  private subscription3: Subscription;

  constructor(private router: Router, private activateRoute: ActivatedRoute, private  searchService: SearchService, private transferService: TransferService) {

    this.starArray = JSON.parse(localStorage.getItem(favoriteStorage)) || [];

    this.startParams.city = this.transferService.urlParams.city || '';

    this.querySubscription = activateRoute.queryParams.subscribe((queryParam: InterfaceCity) => {
        if (queryParam.city) {
          this.startParams.city = queryParam.city;
          this.transferService.changeCity({city: this.startParams.city});
        }
      }
    );

  }

  ngOnInit() {

    console.log(this.transferService.urlParams.city);

    this.subscription = this.transferService.spinnerOnOff.subscribe((spinnerVal: boolean) => {
      this.spinnerOnOff = spinnerVal;
    });

    this.subscription2 = this.transferService.subjectParams.subscribe((params: UrlParams) => {
      this.setParams(params);
    });

    this.setParams(this.startParams);

  }

  setParams(params: UrlParams) {
    this.subscription3 = this.searchService.sendReqFromSubject(params).subscribe((data: InterfaceItem[])=> {
      if (data.length) {
        this.trueResponse = true;
        this.itemsFlat = data;
        this.transferService.spinnerOnOff.next(true);
      } else {
        this.trueResponse = false;
      }
    });
  }

  ngAfterViewInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.querySubscription.unsubscribe();
    this.subscription2.unsubscribe();
    this.subscription3.unsubscribe();
  }

}

