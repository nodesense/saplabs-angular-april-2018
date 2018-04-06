import { Component, OnInit,
         Input,
         Output,
         EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  // two way binding [(likes)]


  // property binding
  @Input()
  likes: number;

  // two way binding
  // output name = input name + "Change" 
  // event binding
  @Output()
  likesChange: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  up() {
    this.likesChange.emit(this.likes + 1);
  }

  down() {
    this.likesChange.emit(this.likes - 1);
  }
}
