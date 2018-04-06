import { DataService } from './../../shared/services/data.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  counter: number;


  name: string = "angular";

  // two way binding
  homeLikes: number = 100;
  

  constructor(private dataService: DataService) {

    // pull 
    // todo: to be improved
    // this.counter = this.dataService.getCounter();

   }

  ngOnInit() {
    // .countersource.next(11) //publish
    this.dataService.counterSource
        .subscribe ( counter => {
            console.log("HOME Subscribe ", counter);
            this.counter = counter;
        });
  }

  parentClick() {
    console.log("parent click");
  }

  increment(e: Event) {
    
    // done in data service
    // this.counter++;

    this.dataService.increment();

    console.log("incr");
    // stop the event bubble up
    e.stopPropagation();
  }

  step(n: number, e: Event) {
    //this.counter += n;
    
    this.dataService.increment();


    console.log("step");
  }

}
