import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products = [];
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];

  constructor(private productsService:ProductsService) { }

  ngOnInit() {
  }

  fetchProducts(){
    return this.productsService.getAllProducts()
      .subscribe( products => {
        this.products = products
      })
  }

}
