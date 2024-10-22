import { Component, inject, OnInit } from '@angular/core';
import { ProductServiceService } from '../../service/product-service.service';
import { IAPIResponseModel, ICheckAPI, IMainProduct, IProductAPI, IProductAPI2 } from '../../../models/interfaces/testInterface';
import { ActivatedRoute, Router } from '@angular/router';

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
  testProductResponse$: IProductAPI2;
  testMainProduct$: IMainProduct = {
    name: "",
    sku: "",
    price: 0,
    weight: 0,
    finishingOptions: []
  };

  productId: any = 0;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    //extract parameter from URI
    this.productId = parseInt(this.activatedRoute.snapshot.paramMap.get('productId'));
    if (isNaN(this.productId)) {
      this.router.navigate(["/main"])
    }
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
    this.testProductService.getProductById(productId).subscribe((res: IProductAPI2) => {
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
