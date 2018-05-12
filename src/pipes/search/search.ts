import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {

  transform(items: any[],term: string): any[] {
    if(!items) return [];
    if(!term) return items;
    term = term.toLowerCase();
    return items.filter( item => {
      return (`${item.name.first} ${item.name.first}`).toLowerCase().includes(term);
    });
  }
}
