import { Pipe, PipeTransform } from '@angular/core';

// products/items, fieldname, predicate, expected value

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(items: any[], fieldName: string, order: string): any[] {
    if (!items || !order) {
      return items;
    }

  if (order == 'asc') {
      return items.sort ((lItem, rItem)   => {
        if (lItem[fieldName] > rItem[fieldName]) {
          return 1;
        }


        if (lItem[fieldName] < rItem[fieldName]) {
          return -1;
        }

        return 0;
  });
 }
 
 if (order == 'desc') {
  return items.sort ((lItem, rItem)   => {
    if (lItem[fieldName] < rItem[fieldName]) {
      return 1;
    }

    if (lItem[fieldName] > rItem[fieldName]) {
      return -1;
    }

    return 0;
});
}

}

}
