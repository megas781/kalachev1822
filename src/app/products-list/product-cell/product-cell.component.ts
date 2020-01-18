import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../shared/models/product';

@Component({
  selector: '.product-cell-selector',
  templateUrl: './product-cell.component.html',
  styleUrls: ['./product-cell.component.css']
})
export class ProductCellComponent implements OnInit {

  @Input('product') product: Product;

  constructor() { }

  ngOnInit() {
  }

}
