import {Component, OnInit} from '@angular/core';


// decorator, meta data, used by angular runtime
@Component({
    selector: 'app-root', // html tag/element name <app-root> </app-root>

    // view 
    templateUrl: 'app.component.html',

    // styles, scopped style, only for this component
    styleUrls: [
        'app.component.css'
    ]


})
export class AppComponent implements OnInit {

    // member variable
      appTitle: string = 'Product app';

      startYear: number = 2000;
      // type inference, takes endYear as number type
      endYear = new Date();
      address: any = { city: 'BLR'};
      

      // called before loading view into browser
      constructor() {
          console.log("App Comp created");
      }

      // called after view loaded
      ngOnInit() {
        console.log("app init");

        setTimeout(()=> {
            console.log("timeout");
            this.startYear += 2;
        }, 3000);
      }

      // event handler
      onContactHandler(address: any) {
          alert("from child " + address.city);
      }

}
