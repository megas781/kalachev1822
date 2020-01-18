import { Pipe, PipeTransform } from '@angular/core';
import {Product} from './shared/models/product';

@Pipe({
  name: 'productSort'
})
export class ProductSortPipe implements PipeTransform {

  transform(productList: Product[], sortKey: string, direction: number): Product[] {
    console.log(`sortKey: ${sortKey}; direction: ${direction}`)
    switch (sortKey) {
      case 'price':
        return productList.sort(function(lh, rh) {
          return lh.price < rh.price ? -direction: direction;
        });
      case 'vendor-code':
        return productList.sort(function(lh, rh) {
          return lh.vendorCode < rh.vendorCode ? -direction: direction;
        });
      case 'name':
        return productList.sort(function(lh, rh) {
          return lh.name < rh.name ? -direction: direction;
        });
    }

    return
  }

}
