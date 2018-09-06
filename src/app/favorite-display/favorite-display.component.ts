import {Component, OnInit} from "@angular/core";
import {TransferService} from "../transfer.service";

@Component({
  selector: 'favorite-display-app',
  templateUrl:'favorite-display.component.html'
})
export class FavoriteDisplayComponent implements OnInit{

  constructor ( private transferService: TransferService){

  }

  ngOnInit(){
    const favoriteArr = JSON.parse(localStorage.getItem('favoriteStorage')) || [];
    this.transferService.transferArray.next(favoriteArr);
  }
}
