import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, interval} from 'rxjs';
import { debounceTime, map, mergeMap, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-smart-counter',
  templateUrl: './app-smart-counter.component.html',
  styleUrls: ['./app-smart-counter.component.scss']
})
export class AppSmartCounterComponent implements OnInit{

  public input = new FormControl(0);
  public counterValue:number = 0;
  
  ngOnInit() {
    this.input.valueChanges
      .pipe(
        debounceTime(300),
        mergeMap(() => this.intervalValue()),
        map(() => this.changeValue()),
      )
      .subscribe(value => this.counterValue = value);
  }

  private intervalValue(): Observable<number> {
    return interval(40)
      .pipe(
        takeWhile(() => (this.counterValue != this.input.value) && (this.input.value != null)),
      )
  }

  private changeValue(): number {
    return this.input.value > this.counterValue ? this.counterValue + 1 : this.counterValue - 1;
  }

}
