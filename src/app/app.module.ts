import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductCellComponent } from './products-list/product-cell/product-cell.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { ModalEditComponent } from './products-list/modal-edit/modal-edit.component';
import { ProductSortPipe } from './product-sort.pipe';
import { ProductFilterPipe } from './product-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ProductsListComponent,
    ProductCellComponent,
    NotFoundComponent,
    ModalEditComponent,
    ProductSortPipe,
    ProductFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: MainPageComponent},
      // {path: 'products/:category', component: ProductsListComponent},
      // {path: 'products/motherboards', component: ProductsListComponent},
      // {path: 'products/cpu', component: ProductsListComponent},
      // {path: 'products/video-cards', component: ProductsListComponent},
      {path: "products/:category", component: ProductsListComponent},
      {path: 'products', component: ProductsListComponent},
      {path: '**', component: NotFoundComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
