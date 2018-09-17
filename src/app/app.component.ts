import {OnInit, Component, OnDestroy} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs/internal/Subscription";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

import {SearchService} from "./search.service";
import {TransferService} from "./transfer.service";
import {UrlParams} from "./url-params";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',
                './spinner.css'],
  providers: [SearchService, TransferService]
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'MY_Nestoria';
  searchForm: FormGroup;
  cityName: string;
  subscription: Subscription;

  constructor(private transferService: TransferService, private  searchService: SearchService, private formBuilder: FormBuilder,
              private router: Router, private activateRoute: ActivatedRoute) {
  }

  ngOnInit(){

    this.subscription = this.transferService.subjectParams.subscribe((urlParam: UrlParams) => {
      this.cityName = urlParam.city;
      this.searchForm.get('searchString').setValue(this.cityName, {emitEvent:true});
    });

    this.searchForm = this.formBuilder.group({
      searchString: ['',  [Validators.required, Validators.minLength(3)]],
    });

  }

  navQueryApp(){

    this.router.navigate(['/buy',1]);

  }

  submit(){

    this.transferService.setData({city: this.searchForm.controls['searchString'].value});

  }

  ngOnDestroy(){

    this.subscription.unsubscribe();

  }

}
