import {Component} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TransferService} from "../../../app/transfer.service";
import {SearchService} from "../../../app/search.service";
import {Subscription} from "rxjs/internal/Subscription";

@Component({
  selector: 'header-panel-app',
  templateUrl: 'header-panel.component.html',
  styleUrls: ['header-panel.component.css']
})
export class HeaderPanelComponent {
  id: number  = 1;
  searchForm: FormGroup;
  z;
  tempVal;
  // tempVal = 'Manchester';
  // homeOrNot;
  homeOrNot = true ;

  private subscription: Subscription;

  constructor(private transferService: TransferService, private  searchService: SearchService, private formBuilder: FormBuilder,
              private router: Router, private activateRoute: ActivatedRoute) {
  }

  ngOnInit() {

    // this.subscription = this.activateRoute.params.subscribe(params=>{this.id = params['id']});
    // this.items = this.searchService.getData();

    // this.tempVal = this.transferService.getCityFromHome();

    // this.transferService.dataFromHomePage.subscribe(value => {
    //   this.tempVal =  value['city'];
    //   // console.log(this.tempVal);
    // });

    this.searchForm = this.formBuilder.group({
      'searchString': [this.tempVal,  [Validators.required, Validators.minLength(3)]],
    });

  }
}
