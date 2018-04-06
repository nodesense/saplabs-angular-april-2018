import { Injectable } from '@angular/core';

import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  // observed
  private counter: number = 1000;

  // Observable
  // Subject calls subscribe only on .next call
  // counterSource: Subject<number> = new Subject();

  // Observable
  // BehaviorSubject calls subscribe immediately with
  // a last known value
  counterSource: BehaviorSubject<number>;

  constructor() { 
    this.counterSource = new BehaviorSubject(this.counter);
  }

  getCounter() {
    return this.counter;
  }

  increment() {
    this.counter++;

    console.log("Publish ", this.counter);
    // publish
    this.counterSource.next(this.counter);
  }

  decrement() {
    this.counter--;
    
    // publish
    this.counterSource.next(this.counter);
  }

}
