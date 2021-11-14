import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetilComponent } from './product-detil/product.detil';
import { ProductComponent } from './product-list/product.list';

const routes: Routes = [
  { path: '', component: ProductComponent },
  { path: 'detil', component: ProductDetilComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
