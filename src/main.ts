import { AppModule } from './app/app.module';
 // bootstrap Angular module into browser

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
 
platformBrowserDynamic()
 .bootstrapModule(AppModule);

