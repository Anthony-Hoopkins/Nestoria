import {Component, Input, OnInit} from "@angular/core";
import {Subscription} from "rxjs/internal/Subscription";
import {ActivatedRoute, Router} from "@angular/router";

import {TransferService} from "../transfer.service";
import {SearchService} from "../search.service";


const favoriteStorage = 'favoriteStorage';

@Component({
  selector: 'flat-item-app',
  templateUrl:'flat-item.component.html',
  styleUrls: ['flat-item.component.css']
})
export class FlatItemComponent implements OnInit{
  @Input() item;
  @Input() index: number;
  // itemsFlat;
  // city: string = 'durham';
  private subscription: Subscription;
  id: number  = 1;

  favoriteArr; // = JSON.parse(localStorage.getItem(favoriteStorage)) || [];

  constructor(private router: Router, private activateRoute: ActivatedRoute, private  searchService: SearchService, private transferService: TransferService) {
    this.favoriteArr = JSON.parse(localStorage.getItem(favoriteStorage)) || [];
  }

  ngOnInit(){

    this.favoriteArr.forEach(prop =>{
      if (this.item.lister_url === prop.lister_url){
        // console.log('Какое совпадение');
        this.item.starActiveIndicator = true;
      }
    })
  }

  toggleActive(index){

    this.favoriteArr = JSON.parse(localStorage.getItem(favoriteStorage)) || [];
    console.log(index);
    console.log(this.item.title);
    // this.starActiveIndicator[index] = !this.starActiveIndicator[index];
    this.item.starActiveIndicator = !this.item.starActiveIndicator;
    let count = true;

    this.favoriteArr.forEach((prop, i) =>{
      if (prop.lister_url === this.item.lister_url ){
        this.favoriteArr.splice(i, 1);
        console.log('  совпадение при тогиле - удалить из фаворитов');
        count = false;
      }
    });

    if (count){
      this.favoriteArr.push(this.item);
      console.log(' пушим пушим пушим пушим пушим ');
    }
    localStorage.setItem(favoriteStorage, JSON.stringify(this.favoriteArr));
    console.log(this.favoriteArr);

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


}
