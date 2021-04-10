import { Component, OnInit } from '@angular/core';

import {ProductsService} from '../products.service';
import {Products} from '../module';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Products[];
  loading: boolean;
  newProduct: string;
  constructor(private productService: ProductsService) {
    this.newProduct = '';
  }

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    this.loading = false;
    this.productService.getProducts().subscribe(((products) => {
      this.products = products;
      this.loading = true;
    }));
  }
  // addProduct() {
  //   const product = {
  //     title: this.newProduct
  //   };
  //   this.loading = false;
  //   this.productService.addProduct(product as Products).subscribe((product) => {
  //     this.products.unshift(product);
  //     this.newProduct = '';
  //     this.loading = true;
  //   });
  // }
  //
  // deleteProduct(id: number) {
  //   this.products = this.products.filter((x) => x.id !== id);
  //   this.productService.deleteProduct(id).subscribe(() => {
  //     console.log('deleted', id);
  //   });
  // }
  share(): void {
    window.alert('The product has been shared!');
  }
}
