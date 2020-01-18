import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../shared/models/product';

@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.css']
})
export class ModalEditComponent implements OnInit {

  // @Input('displayModal') displayModal: boolean;
  @Input('product') product?: Product;

  constructor() { }

  ngOnInit() {
  }

}
