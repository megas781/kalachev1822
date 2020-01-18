import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MotherboardsListComponent } from './motherboards-list/motherboards-list.component';
import { CpuListComponent } from './cpu-list/cpu-list.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductCellComponent } from './products-list/product-cell/product-cell.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MotherboardsListComponent,
    CpuListComponent,
    ProductsListComponent,
    ProductCellComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
