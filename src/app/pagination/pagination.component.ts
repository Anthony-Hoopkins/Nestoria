import {Component, OnInit} from "@angular/core";
import {TransferService} from "../transfer.service";
import {ActivatedRoute, Router} from "@angular/router";
import {SearchService} from "../search.service";

@Component({
  selector: 'pagination-app',
  templateUrl: 'pagination.component.html',
  styleUrls: ['pagination.component.css']
})
export class PaginationComponent implements OnInit{
  pagArr: number[] = [1,2,3,4,5,6];

  constructor(private transferService: TransferService, private router: Router, private activateRoute: ActivatedRoute, private  searchService: SearchService){}

  ngOnInit(){

    this.transferService.subjectParams.subscribe(params => {

      this.router.navigate([`/buy/${params['numberPage']}`]);

      this.setArr(params, 5);

    });

    // this.searchService.subjectAllPage.subscribe(go => {
    //   this.setArr(5, go);
    //
    // });

  }

  goPagination(num){

    this.transferService.setData({numberPage: num});
    console.log(num);

  }

  setArr(params, go){

    this.pagArr = this.transferService.setPagArr(params.numberPage, go);
    console.log(params +' sfagsadfg  '+go);
  }
}
