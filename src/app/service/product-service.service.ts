import { Injectable } from '@angular/core';
import { liveAPILink, testAPILink } from '../../constants';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAPIResponseModel, IMainProduct, IProductAPI, IProductAPI2 } from '../../models/interfaces/testInterface';


@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  testLocal = true;
  apiURL: string = "";

  constructor(private http: HttpClient) {
    if (this.testLocal) {
      this.apiURL = testAPILink;
      console.log(`Testing in Local Environment, link: ${this.apiURL}`);
    } else {
      this.apiURL = liveAPILink;
      console.log(`Testing with Live Deployment, link: ${this.apiURL}`);
    }
   }

  checkConnection(): Observable<any> {
    return this.http.get<any>(`${this.apiURL}`)
  }

  getProductById(productId: number): Observable<IProductAPI2> {
    return this.http.get<IProductAPI2>(`${this.apiURL}api/products/${productId}`)
  }

  getMainProduct(): Observable<IMainProduct> {
    return this.http.get<IMainProduct>(`${this.apiURL}api/mockproduct`)
  }

}
