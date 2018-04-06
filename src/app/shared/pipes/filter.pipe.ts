import { Pipe, PipeTransform } from '@angular/core';

// products/items, fieldname, predicate, expected value

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], fieldName, predicate, expectedValue): any[] {
    if (!items || !fieldName || !predicate || !expectedValue) {
      return items;
    }

  if (predicate == '>') {
      return items.filter (item => item[fieldName] > expectedValue);
  }

  if (predicate == '<') {
    return items.filter (item => item[fieldName] < expectedValue);
  }

  return items.filter (item => item[fieldName] == expectedValue);
}

}
