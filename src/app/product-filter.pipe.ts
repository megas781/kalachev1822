import { Pipe, PipeTransform } from '@angular/core';
import {Product} from './shared/models/product';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(productList: Product[], filterString: string, type: string): Product[] {

    if (filterString == null || filterString.length === 0) {
      return productList;
    } else {
      filterString = filterString.trim().replace(/\s+/g, ' ').toLowerCase();
      switch (type) {
        case 'filter-by-name':
          return productList.filter(function(product) {
            return product.name.trim().replace(/ +/g, ' ').toLowerCase().indexOf(filterString) != -1;
          });
        case 'filter-by-vendor-code':
          return productList.filter(function(product) {
            return product.vendorCode.trim().replace(/ +/g, ' ').toLowerCase().indexOf(filterString) != -1;
          });
        default:

      }
    }

    return
  }

}
