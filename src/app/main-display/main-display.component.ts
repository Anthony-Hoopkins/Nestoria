import {AfterViewInit, Component, OnDestroy, OnInit} from "@angular/core";
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
export class MainDisplayComponent implements OnInit, AfterViewInit, OnDestroy {

  startParams: UrlParams = {
    numberPage: 1,
    city: 'Manchester',
    listing_type: 'sale',
    minPrice: 0,
    maxPrice: 999999999,
    property: 'all',
    minRoom: 0,
    maxRoom: 999,
  };

  itemsFlat;
  private subscription: Subscription;
  private querySubscription: Subscription;
  private subscription2: Subscription;
  private subscription3: Subscription;

  id: number = 1;
  spinnerOnOff;

  trueResponse = true;
  loadingVar: boolean = true;

  constructor(private router: Router, private activateRoute: ActivatedRoute, private  searchService: SearchService, private transferService: TransferService) {

    this.startParams.city = localStorage.getItem('cityName') || '';

    this.querySubscription = activateRoute.queryParams./*takeUntil(this.destroy$).*/subscribe((queryParam: any) => {
        if (queryParam['city']) {
          this.startParams.city = queryParam['city'];
          localStorage.setItem('cityName', this.startParams.city);
          this.transferService.changeData({city: this.startParams.city});
        }
      }
    );

  }

  ngOnInit() {

    this.subscription = this.transferService.spinnerOnOff.subscribe(val => {
      this.spinnerOnOff = val;
    });

    this.subscription2 = this.transferService.subjectParams.subscribe(params => {
      this.setParams(params);
    });

    this.setParams(this.startParams);

  }

  setParams(params) {
    this.subscription3 = this.searchService.sendReqFromSubject(params).subscribe(data => {
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

