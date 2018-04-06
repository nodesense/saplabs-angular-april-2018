import { Observable } from 'rxjs/Observable';
import { DataService } from './../../shared/services/data.service';
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

  counter$: Observable<number>;

  constructor(private dataService: DataService) {

    // to be bind in template
    this.counter$ = this.dataService.counterSource;

   }

  ngOnInit() {
  }

  contact() {
    // trigger/emit an event
    // parent $event == this.address
    // publish event
    this.contactEvent.emit(this.address);
  }

}
