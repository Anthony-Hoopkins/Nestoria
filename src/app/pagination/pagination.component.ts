import {Component, OnDestroy, OnInit} from "@angular/core";
import {TransferService} from "../transfer.service";
import {ActivatedRoute, Router} from "@angular/router";
import {SearchService} from "../search.service";
import {Subscription} from "rxjs/internal/Subscription";
import {InterfacePageCount} from "../interface-page-count";

@Component({
  selector: 'pagination-app',
  templateUrl: 'pagination.component.html',
  styleUrls: ['pagination.component.css']
})
export class PaginationComponent implements OnInit, OnDestroy{
  pagArr: number[] = [1,2,3,4,5,6];

  private subscription: Subscription;
  private subscription2: Subscription;

  constructor(private transferService: TransferService, private router: Router, private activateRoute: ActivatedRoute, private  searchService: SearchService){}

  ngOnInit(){

    this.subscription2 = this.transferService.subjectParams.subscribe(params => {

      this.router.navigate([`/buy/${params['numberPage']}`]);

    });

    this.subscription = this.searchService.subjectAllPage.subscribe((pageCount:InterfacePageCount) => {

      this.setArr(pageCount.page, pageCount.total);

    });

  }

  goPagination(num: number){

    this.transferService.setData({numberPage: num});

  }

  setArr(params:number, go:number){

    this.pagArr = this.transferService.setPagArr(params, go);

  }

  ngOnDestroy(){

    this.subscription.unsubscribe();
    this.subscription2.unsubscribe();

  }
}
