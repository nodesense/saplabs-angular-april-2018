import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikeComponent } from './components/like/like.component';
import { HighlightDirective } from './directives/highlight.directive';
import { PowerPipe } from './pipes/power.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';

@NgModule({
  imports: [
    CommonModule
  ],

  // declaration are private to this module
  declarations: [  
    LikeComponent, 
    HighlightDirective, 
    PowerPipe, 
    FilterPipe, 
    SortPipe
  ],

 // export comp, pipe, directive that to be used 
 // in other modules
 exports: [
    LikeComponent,
    PowerPipe,
    HighlightDirective,
    FilterPipe,
    SortPipe
 ]
})
export class SharedModule { }
