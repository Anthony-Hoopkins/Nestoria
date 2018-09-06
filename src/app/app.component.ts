import {OnInit, Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs/internal/Subscription";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

import {SearchService} from "./search.service";
import {TransferService} from "./transfer.service";
import {Phone} from './phone';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',
                './spinner.css'],
  providers: [SearchService, TransferService]
})
export class AppComponent implements OnInit {
  title = 'MY_Nestoria';
  items: Phone[] = [];
  id: number  = 1;
  public searchForm: FormGroup;

  private subscription: Subscription;

  constructor(private transferService: TransferService, private  searchService: SearchService, private formBuilder: FormBuilder,
              private router: Router, private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    // this.subscription = this.activateRoute.params.subscribe(params=>{this.id = params['id']});
    // this.items = this.searchService.getData();
    this.searchForm = this.formBuilder.group({
      'searchString': ['bristol',  [Validators.required, Validators.minLength(3)]],
    });

  }


  submit() {

    this.transferService.setData({city: this.searchForm.controls['searchString'].value});
    console.log(this.activateRoute.params);

  }


  //-----


  goMet() {
    this.router.navigate(['/about']);
  }

  addItem() {
    this.searchService.addData(this.searchForm.controls['searchString'].value, 2200);
  }



  // this.activateRoute.params
  //   .pluck('userId') // получаем userId из параметров
  //   .switchMap(userId => this.userService.getData(userId))
  //   .subscribe(user => this.user = user);
  // this.subscription = this.activateRoute.params.subscribe(params=>{this.id = params['id']});


  // goPagination(num) {
  //   this.transferService.setNumPage(num);
  //   console.log(num);
  //   // this.pagArr =  this.transferService.setPagArr(44);
  // }

  ngDoCheck() {
    // console.log(this.activateRoute.snapshot);
    // console.log(this.activateRoute);
  }

  // console.log(this.activateRoute.snapshot.params);
  // console.log(this.activateRoute.snapshot.queryParams);

  // console.log(this.searchForm.controls['searchString'].value);
  // this.searchService.addData(this.searchForm.controls['searchString'].value, 2500);
  // this.searchService.addRegionOnRequestUrl(this.searchForm.controls['searchString'].value);
  // this.searchService.getFlats().subscribe(data => this.itemsFlat=data);
  // this.itemsFlat = this.searchService.sendRequestNestoria();

  // this.searchForm.valueChanges.subscribe(data => this.logInfo(data));
  // this.searchService.getFlats().subscribe(data => this.itemsFlat=data);
  // drawLine(){
  //   this.searchService.log(this.searchForm.controls['searchString'].value);
  // }
  // logInfo(data) {
  //   console.log(data);
  // }

}
