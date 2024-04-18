import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ConsumeApiService {
  private apiUrl = 'http://fakestoreapi.com/';

  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get(this.apiUrl + 'products')
  }
}
