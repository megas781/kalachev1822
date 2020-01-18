import {Component, OnInit} from '@angular/core';
import {ProductService} from '../product.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  searchType: string = 'filter-by-name';
  searchString: string = '';

  public sortableProperties = {
    'vendor-code': 0,
    'name': 0,
    'price': 1
  };

  activeSortProperty: string = 'price';
  getActiveSortDirection() {
    return this.sortableProperties['vendor-code'] + this.sortableProperties.name + this.sortableProperties.price
  }

  constructor(
    public productService: ProductService,
    public activatedRoute: ActivatedRoute
  ) {
    productService.fetchProducts().then(function(products) {
      console.log(products);
    });

  }

  ngOnInit() {
  }

  sortablePropertyTapped(tappedFilter: string) {

    //Если кликаем на то же самое
    if (this.activeSortProperty === tappedFilter) {
      this.sortableProperties[tappedFilter] = -this.sortableProperties[tappedFilter];
    } else {
      this.sortableProperties['vendor-code'] = 0;
      this.sortableProperties['name'] = 0;
      this.sortableProperties['price'] = 0;

      this.sortableProperties[tappedFilter] = 1;
      this.activeSortProperty = tappedFilter;
    }

  }

}
