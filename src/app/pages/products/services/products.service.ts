import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl = 'http://localhost:3004'
  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product[]> {

    return this.http.get<Product[]>(`${this.apiUrl}/products`);
  }
}
