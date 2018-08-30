import {OnInit, Component} from '@angular/core';
import {SearchService} from "./search.service";
import {TransferService} from "./transfer.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Phone} from './phone';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SearchService, TransferService]
})
export class AppComponent implements OnInit {
  title = 'Nestoria';
  items: Phone[] = [];

 public searchForm: FormGroup;

  constructor(private transferService: TransferService, private  searchService: SearchService, private formBuilder: FormBuilder) {}

  itemsFlat:any;

  ngOnInit() {
    this.items = this.searchService.getData();
    this.searchForm = this.formBuilder.group({
      'searchString': ['bristol',  [Validators.required, Validators.minLength(3)]],
    });

  }
  submit() {
    this.transferService.setData(this.searchForm.controls['searchString'].value);
  }

  addItem(){
    this.searchService.addData(this.searchForm.controls['searchString'].value, 2200);
  }

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
