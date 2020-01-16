import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProductsService } from './../../../core/services/products/products.service';
import { Product } from './../../../core/models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      /*this.product = this.productsService.getProduct(id);*/
      this.fetchProduct(id);
    });

  }

  fetchProduct(id:string){
    this.productsService.getProduct(id)
      .subscribe( product => {
        this.product = product
      })
  }

  createProduct(){
    
    const newProduct:Product = {
      id: '1111',
      title: 'nuevo desde angular',
      image:'assets/images/banner-1.jpg',
      price: 300000,
      description: 'nuevo producto'
    }



    this.productsService.createProduct(newProduct)
      .subscribe( product => {
        console.log(product)
      })
  }

  updateProduct(){
    const updateProduct: Partial<Product> = {
      price: 10000,
      description: 'producto editado desde angular'
    }



    this.productsService.updateProduct('1', updateProduct)
      .subscribe( product => {
        console.log(product)
      })
  }

  deleteProduct(){

    this.productsService.deleteProduct('1')
      .subscribe( resp => {
        console.log(resp)
      })

  }

}
