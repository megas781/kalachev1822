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

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ProductsListComponent,
    ProductCellComponent,
    NotFoundComponent,
    ModalEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: MainPageComponent},
      {path: 'products', component: ProductsListComponent},
      {path: 'products/:category', component: ProductsListComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
