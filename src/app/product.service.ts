import { Injectable } from '@angular/core';
import {Product, Motherboard, CPU, VideoCard} from './shared/models/product';
import {ajaxGet, ajaxPut} from 'rxjs/internal-compatibility';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public products: Product[] = [];

  constructor() {
    // console.log('тут?');
    // this.fetchProducts().then(() => console.log("then what??"));
  }


  fetchProducts(category?: string): Promise<Product[]> {
    console.log('fetch!');
    let self = this;
    return new Promise<Product[]>(function(resolve, reject) {
      // console.log(self.httpHeaders);
      // self.http.get('http://localhost:3000/products', {}).subscribe(function(value) {
      //   console.log(value);
      // });
      let url = `http://localhost:3000/products${category ? `?category=${category}`: ''}`;
      // console.log(url);
      ajaxGet(url).subscribe(function(ajax) {

        console.log(ajax.response);
        if (ajax.status !== 200) {
          return;
        }

        if (ajax.response instanceof Array) {
          // console.log(ajax.response.length);
           self.products = (<Array<Object>>ajax.response).map(function(productJson) {
             switch (productJson['category']) {
               case 'motherboards':
                 return Motherboard.init(productJson['id'], productJson['name'], productJson['vendor-code'], productJson['price'], productJson['chipset'], productJson['form-factor']);
               case 'cpu':
                 return CPU.init(productJson['id'], productJson['name'], productJson['vendor-code'], productJson['price'], productJson['socket'], productJson['core-number'], productJson['frequency']);
               case 'video-cards':
                 return VideoCard.init(productJson['id'], productJson['name'], productJson['vendor-code'], productJson['price'], productJson['video-memory']);
               default:
                 return null;

             }
          });
           console.log('m');
           console.log(self.products[0].getJson());
           resolve(self.products);
        } else {
          reject();
        }
      });
    })
  }

  putUpdatedProduct(product: Product) {
    ajaxPut(`http://localhost:3000/products/${product.id}`, product.getJson()).subscribe(function(ajax) {
      console.log(ajax.response);
    })
  }

  addProduct(product: Product) {
    ajaxPut(`http://localhost:3000/products/${product.id}`, product.getJson()).subscribe(function(ajax) {
      console.log(ajax.response);
    })
  }
  fetchLastId(): Promise<number> {
    return new Promise<number>(function(resolve, reject) {
      ajaxGet('http://localhost:3000/metadata').subscribe(function(ajax) {
        resolve((Number(ajax.response['lastId']) + 1));
        ajaxPut('http://localhost:3000/metadata', {lastId: (Number(ajax.response['lastId']) + 1)}).subscribe(function(ajax) {
          console.log('сохранил lastId');
        })
      });
    })
  }
}
