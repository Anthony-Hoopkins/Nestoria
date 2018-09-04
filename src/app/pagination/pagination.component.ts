import {Component, OnInit} from "@angular/core";
import {TransferService} from "../transfer.service";

@Component({
  selector: 'pagination-app',
  templateUrl: 'pagination.component.html',
  styleUrls: ['pagination.component.css']
})
export class PaginationComponent implements OnInit{
  pagArr: number[] = [1,2,3,4,5,6];

  constructor(private transferService: TransferService){}

  ngOnInit(){

    this.transferService.subjectParams.subscribe(params => {
        this.setArr(params);
    });

  }

  setArr(params){
    this.pagArr = this.transferService.setPagArr(params.numberPage);
  }

  goPagination(num){

    this.transferService.setNumPage(num);
    console.log(num);

  }
}
