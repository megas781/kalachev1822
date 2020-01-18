import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../shared/models/product';

@Component({
  selector: '.product-cell-selector',
  templateUrl: './product-cell.component.html',
  styleUrls: ['./product-cell.component.css']
})
export class ProductCellComponent implements OnInit {

  @Input('product') product: Product;
  @Output() editEventEmitter = new EventEmitter();
  @Output() deleteEventEmitter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  // editButtonTapped(product: Product) {
  //
  // }
  // deleteButtonTapped(product: Product) {
  //
  // }
}
