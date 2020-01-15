import { Injectable } from '@angular/core';

import { Product } from './../../models/product.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product[] = [];

  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get<Product[]>(environment.url_api)
                        
  }

  getProduct(id: string) {
    return this.http.get<Product>(`${environment.url_api}/${id}`)
  }

  createProduct(product:Product){
    return this.http.post(environment.url_api, product)
  }
}
