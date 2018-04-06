import { ProductEditComponent } from './../components/product-edit/product-edit.component';
import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SaveAlertGuard implements CanDeactivate<ProductEditComponent> {
  canDeactivate(target: ProductEditComponent) {
    if (target.form.pristine) {
      return true;
    }
    
    const result = window.confirm("unsaved changes found, want to leave?");
    return result;
  }
}
