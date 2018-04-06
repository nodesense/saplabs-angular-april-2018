import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  members: string[] = ["Krish", "Venkat"]; //ngFor
  show: boolean = true; // ngIf


  highlight: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  empty() {
    this.members = [];
  }

  addMember(name: string) {
    this.members.push(name);
  }

}
