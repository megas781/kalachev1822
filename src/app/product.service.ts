import { Injectable } from '@angular/core';
import {Product, Motherboard, CPU, VideoCard} from './shared/models/product';
import {ajaxGet} from 'rxjs/internal-compatibility';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public products: Product[] = [];

  constructor() {
    // console.log('тут?');
    // this.fetchProducts().then(() => console.log("then what??"));
  }

  fetchProducts(): Promise<Product[]> {
    let self = this;
    return new Promise<Product[]>(function(resolve, reject) {
      ajaxGet('http://localhost:3000/products').subscribe(function(ajax) {
        // console.log(ajax.response);

        if (ajax.response instanceof Array) {
           self.products = (<Array<Object>>ajax.response).map(function(productJson) {
             switch (productJson['category']) {
               case 'motherboard':
                 return Motherboard.init(productJson['id'], productJson['name'], productJson['vendor-code'], productJson['price'], productJson['chipset'], productJson['form-factor']);
               case 'cpu':
                 return CPU.init(productJson['id'], productJson['name'], productJson['vendor-code'], productJson['price'], productJson['socket'], productJson['core-number'], productJson['frequency']);
               case 'video-card':
                 return VideoCard.init(productJson['id'], productJson['name'], productJson['vendor-code'], productJson['price'], productJson['video-memory']);
               default:
                 return null;

             }
          });
           resolve(self.products);
        } else {
          reject();
        }
      });
    })
  }
}
