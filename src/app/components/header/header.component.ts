import { DataService } from './../../shared/services/data.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  counter: number;

  // Parent to child communication (Input)
  // Property binding
  
  @Input()
  appTitle: string;


  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.counterSource
        .subscribe ( counter => {
          this.counter = counter;
          console.log("HEADER Sub");
        });
  }

}
