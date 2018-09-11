import {Component, OnInit} from "@angular/core";
import {TransferService} from "../transfer.service";

@Component({
  selector: 'favorite-display-app',
  templateUrl:'favorite-display.component.html'
})
export class FavoriteDisplayComponent implements OnInit{

  favoriteArr;
  itemsFlat;

  constructor ( private transferService: TransferService){

  }

  ngOnInit(){

    this.favoriteArr = JSON.parse(localStorage.getItem('favoriteStorage')) || [];
    this.itemsFlat = this.favoriteArr;
    console.log(this.favoriteArr);

  }




}
