import {OnInit, Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs/internal/Subscription";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

import {SearchService} from "./search.service";
import {TransferService} from "./transfer.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',
                './spinner.css'],
  providers: [SearchService, TransferService]
})
export class AppComponent implements OnInit {
  title = 'MY_Nestoria';
  id: number  = 1;
  searchForm: FormGroup;
  tempVal;


  private subscription: Subscription;

  constructor(private transferService: TransferService, private  searchService: SearchService, private formBuilder: FormBuilder,
              private router: Router, private activateRoute: ActivatedRoute) {
  }

  ngOnInit() {

    this.transferService.transferCity.subscribe(val => {
      this.tempVal = val['city'];
      console.log(this.tempVal);
    });

    this.searchForm = this.formBuilder.group({
      'searchString': ['',  [Validators.required, Validators.minLength(3)]],
    });

  }

  navQueryApp(link){
    this.router.navigate(['/buy',1]/*, {
      queryParams: {'city': this.tempVal }
    }*/);
  }

  submit() {

    this.transferService.setData({city: this.searchForm.controls['searchString'].value});
    localStorage.setItem('cityName', this.searchForm.controls['searchString'].value);

  }

  //-----

  // goMet() {
  //   this.router.navigate(['/about']);
  // }
  //
  // addItem() {
  //   this.searchService.addData(this.searchForm.controls['searchString'].value, 2200);
  // }


}
