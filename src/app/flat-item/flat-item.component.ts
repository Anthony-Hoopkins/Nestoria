import {Component, Input, OnInit} from "@angular/core";
import {Subscription} from "rxjs/internal/Subscription";
import {ActivatedRoute, Router} from "@angular/router";

import {TransferService} from "../transfer.service";
import {SearchService} from "../search.service";
import {InterfaceItem} from "../interface-item";

const favoriteStorage = 'favoriteStorage';

@Component({
  selector: 'flat-item-app',
  templateUrl:'flat-item.component.html',
  styleUrls: ['flat-item.component.css']
})
export class FlatItemComponent implements OnInit{

  @Input() item: InterfaceItem;
  @Input() index: number;
  @Input() starArray: InterfaceItem;

  private subscription: Subscription;

  favoriteArr;

  constructor(private router: Router, private activateRoute: ActivatedRoute, private  searchService: SearchService, private transferService: TransferService) { }

  ngOnInit(){

    this.favoriteArr = this.starArray || [];

    this.favoriteArr.forEach(prop =>{
      if (this.item.lister_url === prop.lister_url){
        this.item.starActiveIndicator = true;
      }
    })

  }

  toggleActive(index){

    this.favoriteArr = JSON.parse(localStorage.getItem(favoriteStorage)) || [];
    this.item.starActiveIndicator = !this.item.starActiveIndicator;
    let count = true;

    this.favoriteArr.forEach((prop, i) => {
      if (prop.lister_url === this.item.lister_url ){
        this.favoriteArr.splice(i, 1);
        count = false;
      }
    });

    if (count){
      this.favoriteArr.push(this.item);
    }
    localStorage.setItem(favoriteStorage, JSON.stringify(this.favoriteArr));

  }

}
