import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  counter: number = 1000;

  name: string = "angular";

  // two way binding
  homeLikes: number = 100;
  

  constructor() { }

  ngOnInit() {
  }

  parentClick() {
    console.log("parent click");
  }

  increment(e: Event) {
    this.counter++;
    console.log("incr");
    // stop the event bubble up
    e.stopPropagation();
  }

  step(n: number, e: Event) {
    this.counter += n;
    console.log("step");
  }

}
