import {AfterContentChecked, AfterViewChecked, AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CPU, Motherboard, Product, VideoCard} from '../../shared/models/product';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../product.service';


@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.css']
})
export class ModalEditComponent implements OnInit {

  @Input('product') product: Product;

  @Output() saveEmitter = new EventEmitter();
  @Output() addEmitter = new EventEmitter();
  @Output() closeEmitter = new EventEmitter();

  theFormGroup: FormGroup;
  filler = {category:'',id:0,name:'',price:0,vendorCode:'', chipset:'',formFactor:'', socket:'', coreNumber: 0, frequency: 0, videoMemory: 0};

  constructor(
    public productService: ProductService
  ) { }

  ngOnInit() {
    let self = this;
    console.log(`onInit??`);
    console.log(self.product);
    if (self.product) {
      this.applyProductValuesForFiller(this.product);
    }

    console.log('filler');
    console.log(this.filler);
    this.theFormGroup = new FormGroup({
      "name": new FormControl(self.filler.name, Validators.required),
      "price": new FormControl(self.filler.price, Validators.required),
      "vendor-code": new FormControl(self.filler.vendorCode, Validators.required),
      "category": new FormControl(self.filler.category, Validators.required),
      "chipset": new FormControl(self.filler.chipset, Validators.required),
      "form-factor": new FormControl(self.filler.formFactor, Validators.required),
      "socket": new FormControl(self.filler.socket, Validators.required),
      "core-number": new FormControl(self.filler.coreNumber, Validators.required),
      "frequency": new FormControl(self.filler.frequency, Validators.required),
      "video-memory": new FormControl(self.filler.videoMemory, Validators.required),
    })
  }



  private applyProductValuesForFiller(product: Product) {
    console.log('appliable product');
    console.log(product);
    if (product instanceof Motherboard) {
      this.filler.category = 'motherboards';
    } else if(product instanceof CPU) {
      this.filler.category = 'cpu';
    } else if(product instanceof VideoCard) {
      this.filler.category = 'video-cards';
    } else {
      //do nothing
    }

    this.filler.id = product.id;
    this.filler.name = product.name;
    this.filler.vendorCode = product.vendorCode;
    this.filler.price = product.price;
    this.filler.chipset = product['chipset'];
    this.filler.formFactor = product['formFactor'];
    this.filler.socket = product['socket'];
    this.filler.coreNumber = product['coreNumber'];
    this.filler.frequency = product['frequency'];
    this.filler.videoMemory = product['videoMemory'];
  }

  private applyFillerValuesForProduct(product: Product){
    // this.product['id'] = this.theFormGroup.controls['id'].value;
    this.product['name'] = this.theFormGroup.controls['name'].value;
    this.product['vendorCode'] = this.theFormGroup.controls['vendor-code'].value;
    this.product['price'] = this.theFormGroup.controls['price'].value;
    this.product['chipset'] = this.theFormGroup.controls['chipset'].value;
    this.product['formFactor'] = this.theFormGroup.controls['form-factor'].value;
    this.product['socket'] = this.theFormGroup.controls['socket'].value;
    this.product['coreNumber'] = this.theFormGroup.controls['core-number'].value;
    this.product['frequency'] = this.theFormGroup.controls['frequency'].value;
    this.product['videoMemory'] = this.theFormGroup.controls['video-memory'].value;
  }

  submitForm() {

    this.applyFillerValuesForProduct(this.product);
    // this.product.name = 'asdf';
    console.log(this.product);
    this.closeEmitter.emit();
    this.productService.putUpdatedProduct(this.product);

  }
  // closeForm() {
  //
  // }
}
