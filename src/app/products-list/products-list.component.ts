import {Component, OnInit} from '@angular/core';
import {ProductService} from '../product.service';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../shared/models/product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  searchType: string = 'filter-by-name';
  searchString: string = '';

  // public isShowingModal = false;
  public editedProduct?: Product = null;
  public isNewProduct = false;

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

    activatedRoute.params.subscribe(function(value) {
      if (value['category']) {
        productService.fetchProducts(value['category']).then(r => 0);
      } else {
        productService.fetchProducts().then(r => 0);
      }
    })

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

  editProduct(product: Product) {
    console.log(product);
    this.editedProduct = product;
  }

  deleteProduct(product: Product) {
    let deleteIndex = this.productService.products.findIndex(function(product2) {
      return product.id === product2.id;
    });
    this.productService.products.splice(deleteIndex, 1);
    this.productService.deleteProduct(product);
  }
  addProduct() {
    this.isNewProduct = true;
  }

  modalClosed() {
    this.editedProduct = null;
    this.isNewProduct = false;
  }

}
