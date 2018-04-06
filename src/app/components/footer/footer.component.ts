import { Component, OnInit,
         Input,

         Output, EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  // parent to child (Input)
  
  @Input()
  startYear: number;

  @Input()
  endYear: Date;

  @Input()
  address: any;

  // Child to parent (Output, only thru EventEmitter)
  // (contactEvent)="expr"
  @Output()
  contactEvent: EventEmitter<any> = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  contact() {
    // trigger/emit an event
    // parent $event == this.address
    // publish event
    this.contactEvent.emit(this.address);
  }

}
