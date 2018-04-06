import { Component, OnInit,
         ViewChild,
         ElementRef
} from '@angular/core';

interface Address {
  city: string;
  // ? is optional, TypeScript
  state?: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  // <input #name />
  @ViewChild("name")
  nameElement: ElementRef;
   
  // address: Address = {city: 'BLR'};

  // address is undefined
  address: Address;

  contactLikes: number = 10000;


  // pipe example
  price: number = 99.99;
  title: string = 'Contact us';
  today: Date = new Date();


  constructor() { }

  ngOnInit() {

    // nativeElement is real dom object
    this.nameElement.nativeElement.value = 'Your name';
    this.nameElement.nativeElement.focus();

    setTimeout(() => {
      this.address = {city: 'BLR'};
    }, 4000);

  }

}
