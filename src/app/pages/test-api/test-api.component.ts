import { Component, inject, OnInit } from '@angular/core';
import { ProductServiceService } from '../../service/product-service.service';
import { ICheckAPI, IMainProduct, IProductAPI } from '../../../models/interfaces/testInterface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test-api',
  standalone: true,
  imports: [],
  templateUrl: './test-api.component.html',
  styleUrl: './test-api.component.css'
})
export class TestAPIComponent implements OnInit {

  testProductService = inject(ProductServiceService);
  testResponse$: ICheckAPI = {
    isOnline: false,
    port: 0
  };
  testProductResponse$: IProductAPI = {
    id: 0,
    name: "",
    sku: "",
    material: ""
  };
  testMainProduct$: IMainProduct;

  productId: any = 0;

  constructor(private activatedRoute: ActivatedRoute) {
    //extract parameter from URI
    this.productId = parseInt(this.activatedRoute.snapshot.paramMap.get('productId'));
  }

  ngOnInit(): void {
    this.checkConnection();
    this.getProductById(this.productId);
    this.getMainProduct();
  }

  checkConnection() {
    this.testProductService.checkConnection().subscribe((res) => {
      console.log(res);
      this.testResponse$ = res;
    });
  }

  getProductById(productId: any) {
    this.testProductService.getProductById(productId).subscribe((res: IProductAPI) => {
      console.log(res);
      this.testProductResponse$ = res;
    })
  }

  getMainProduct(){
    this.testProductService.getMainProduct().subscribe((res: IMainProduct) => {
      console.log(res);
      console.log(`Response: ${res.name}`);
      this.testMainProduct$ = res;
      console.log(`Main Product Object: ${this.testMainProduct$.name}`);
    })
  }


}
