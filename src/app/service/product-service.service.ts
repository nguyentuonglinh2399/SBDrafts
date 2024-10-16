import { Injectable } from '@angular/core';
import { liveAPILink, testAPILink } from '../../constants';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProductAPI } from '../../models/interfaces/testInterface';


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

  getProductById(productId: number): Observable<IProductAPI> {
    return this.http.get<IProductAPI>(`${this.apiURL}api/products/${productId}`)
  }

}
