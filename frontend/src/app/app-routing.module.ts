import { ProductsCreateComponent } from './components/products-create/products-create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./views/home/home.component";
import { ProductsComponent } from "./views/products/products.component";

const routes: Routes = [{
  path: "",
  component: HomeComponent
}, {
  path: "products",
  component: ProductsComponent
}, {
  path: "products/create",
  component: ProductsCreateComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
