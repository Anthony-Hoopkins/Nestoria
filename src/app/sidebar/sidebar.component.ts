import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TransferService} from "../transfer.service";
import {SearchService} from "../search.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{

  filterForm: FormGroup;

  constructor(private formBilder: FormBuilder, private transferService: TransferService, private  searchService: SearchService,){

  }

  ngOnInit(){

    this.filterForm = this.formBilder.group({

      'switch': ['buy', []],
      'minPrice': ['',  [Validators.required, Validators.minLength(3)]],
      'maxPrice': ['',  [Validators.required, Validators.minLength(3)]],
      'b0' : [],
      'b1': [],
      'b2': [],
      'b3': [],
      'b4': [],
      'property': 'all'

    });

    this.filterForm.valueChanges.subscribe(data => this.onValueChange(data));

  }

  submit(){
    console.log(this.filterForm.controls['switch'].value);
    console.log('Submit');
  }

  onValueChange(data){
    this.transferService.setData({
      listing_type: data.switch,
      property: data.property,
      minPrice: data.minPrice,
      maxPrice: data.maxPrice,
      minRoom: data.b1 ? 1 : data.b2 ? 2 : data.b4 ? 4 :  0,
      maxRoom: data.b4 ? 99 : data.b3 ? 3 : data.b2 ? 2 : data.b1 ? 1 : 999,
      bads:
       [data.b0 ?  0: '',
        data.b1 ?  1: '',
        data.b2 ?  2: '',
        data.b3 ?  3: '',
        data.b4 ?  4: '']
    });
    console.log();
  }

}
