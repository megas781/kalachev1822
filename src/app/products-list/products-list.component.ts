import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  public sortableProperties = {
    'vendor-code': 0,
    'name': 0,
    'price': 1
  };

  activeSortProperty: string = 'price';

  constructor() {

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
    }

  }

}
