import {Component} from "@angular/core";
import {CounterService} from "../counter.service";


@Component ({
  selector: 'app-counter1',
  templateUrl: 'counter1.component.html',
  providers: [CounterService]
})
export class Counter1Component {

  counter: number = 0;

  constructor(private counterService: CounterService){}

  plusOne (){
    this.counterService.increment();
    this.counter = this.counterService.getValue();
  }

  minusOne () {
    this.counterService.decrement();
    this.counter = this.counterService.getValue();
  }
}

