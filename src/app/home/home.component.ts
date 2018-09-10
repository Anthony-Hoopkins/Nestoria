import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TransferService} from "../transfer.service";
import {SearchService} from "../search.service";
import {Subscription} from "rxjs/internal/Subscription";

@Component({
  selector: 'home-app',
  templateUrl: `./home.component.html`,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy{

  placeList = [
    'London',
    'Bristol',
    'Brighton',
    'Cotham',
    'Glasgow',
    'Durham',
    'Manchester',
    'Wales',
    'Chelsea',
    'Staffordshire'
  ];

  searchForm: FormGroup;


  constructor(private transferService: TransferService, private  searchService: SearchService, private formBuilder: FormBuilder,
              private router: Router, private activateRoute: ActivatedRoute) { }

  ngOnInit() {

    this.searchForm = this.formBuilder.group({
      'searchString': ['Manchester', [Validators.required, Validators.minLength(3)]],
    });

  }

  navQuery(item){
    this.router.navigate(['buy', 1], {
      queryParams: {'city': item }
      });
  }

  ngOnDestroy(){
    // this.transferService.transferHomeOrNot.next({val:true});
  }

}
