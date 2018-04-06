import { Observable } from 'rxjs/Observable';
import { AuthService } from './../../auth/services/auth.service';
import { DataService } from './../../shared/services/data.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

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

  authStatus$: Observable<boolean>;


  constructor(private dataService: DataService, 
             private authService: AuthService, 
             private router: Router) { }

  ngOnInit() {
    this.authStatus$ = this.authService.authStatus;
    
    this.dataService.counterSource
        .subscribe ( counter => {
          this.counter = counter;
          console.log("HEADER Sub");
        });
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl("/");
  }

}
