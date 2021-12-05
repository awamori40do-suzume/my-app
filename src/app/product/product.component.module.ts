import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from '../app.component';
import { NavbarComponent } from '../common/navbar/navbar.component';
import { ProductDetilComponent } from './product-detil/product.detil';
import { ProductListComponent } from './product-list/product.list';
import { ProductComponent } from './product.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductListComponent,
    ProductDetilComponent,
    ProductComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class ProductModule { }