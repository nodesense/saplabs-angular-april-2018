import { AuthModule } from './auth/auth.module';
//import { ProductModule } from './product/product.module';
// logical collection of component, directive, pipes, services

import {NgModule} from '@angular/core';

// support browser app
import {BrowserModule} from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SharedModule } from './shared/shared.module';

// forms, validation etc
import {FormsModule} from '@angular/forms';
import { NotFoundComponent } from './components/not-found/not-found.component';

// Angular 4.3 onwards
import {HttpClientModule} from '@angular/common/http';

// Step 1: Route configuration
import {RouterModule, Routes} from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';
const routes: Routes = [
    {
        path: '', // home page
        component: HomeComponent
    },
    {
        path: 'about',  //localhost:4200/about
        component: AboutComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },

    {
        path: 'products',
        loadChildren: 'app/product/product.module#ProductModule',
        canActivate: [AuthGuard]
    },

    {
        path: '**',
        component: NotFoundComponent
    }
];

@NgModule({
    imports: [
            // module dependenies
            BrowserModule, 
            FormsModule,
            HttpClientModule,
            // forRoot creates and returns a module
            // based on app config
            RouterModule.forRoot(routes),

            SharedModule,

            // TODO: lazy load
       //     ProductModule,

            AuthModule

            //3rd party module like Bootstrap,
            // InventoryModule
             
    ],

    declarations: [
        // components, pipe, directive
        AppComponent,
        HomeComponent,
        AboutComponent,
        ContactComponent,
        HeaderComponent,
        FooterComponent,
        NotFoundComponent, 

        // HeaderComponent,
        // Footer
        // Home...
    ],

    bootstrap: [
        // top level component
        AppComponent
    ]

})
export class AppModule {
    
}

