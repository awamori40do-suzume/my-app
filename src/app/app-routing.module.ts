import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetilComponent } from './product/product-detil/product.detil';
import { ProductListComponent } from './product/product-list/product.list';


const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'detil', component: ProductDetilComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
