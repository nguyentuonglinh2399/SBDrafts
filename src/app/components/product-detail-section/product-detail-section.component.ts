import { Component, inject, Input, OnInit, Signal, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductDetail } from '../../../models/classes/ProductDetail';
import { testProduct } from '../../testVariables';
import { ProductService } from '../../service/product-service.service';
import { IProductAPI2 } from '../../../models/interfaces/testInterface';
import { ActivatedRoute, Router } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { ProductAPI } from '../../../models/classes/ProductAPI';

@Component({
  selector: 'app-product-detail-section',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, AsyncPipe],
  templateUrl: './product-detail-section.component.html',
  styleUrl: './product-detail-section.component.scss'
})
export class ProductDetailSectionComponent implements OnInit{

  @Input() productDetail: ProductDetail = testProduct;
  router = inject(Router);
  productService = inject(ProductService);
  productInfo: ProductAPI = new ProductAPI();

  validQuantity: boolean = false;

  productForm: FormGroup;
  currentPic: string;

  getProductById(productId: number) {
    this.productService.getProductById(productId).subscribe((res: IProductAPI2) => {
      this.productInfo = new ProductAPI(res);
      console.log(`This is the Class Instance:\n ${this.productInfo.description}`);
    })
  }

  getProductFromURL() {
    const productId = parseInt(this.activatedRoute.snapshot.paramMap.get('productId'));
    if (isNaN(productId)) {
      this.router.navigateByUrl("main");
    } else {
      this.getProductById(productId);
    }
  }

  initializeForm(data?: IProductAPI2) {
    console.log(data);
    this.productForm = new FormGroup({
      width: new FormControl(2, [Validators.required, Validators.min(2), Validators.max(data.dimensions.maxDimensionAllowed), ]),
      height: new FormControl(2, [Validators.required, Validators.min(2), Validators.max(data.dimensions.maxDimensionAllowed)]),
      material: new FormControl(data.materialOptions, [Validators.required]),
      finishingOptions: new FormControl(data.finishingOptions, [Validators.required]),
      specialInstructions: new FormControl(""),
      quantity: new FormControl(1, [Validators.required, Validators.pattern("^[0-9]*$"), Validators.min(1)])
    })
  }

  onSubmit() {
    if (this.productForm.valid) {
      console.log(this.productForm.value);
    } else {
      console.log("Shit's wrong")
    }

  }

  constructor(private activatedRoute: ActivatedRoute){
  }

  ngOnInit(): void {
    this.getProductFromURL();
    this.initializeForm(this.productInfo);
  }

}




//   prodcutInfo2: IProductAPI2;
//   productForm2: FormGroup = new FormGroup({});
//   productId: number = 0;
  
//   productForm: FormGroup;
  
//   currentPic: string;
//   currentQuantity = signal(1);
//   validQuantity = signal(true);
//   quantity: number = 1;

//   maxDimensions: number = 8;
//   materialOptions: string[] = ["Smooth", "Rough", "Shit"]
//   validDimensions: boolean;
//   // hasSlit: boolean = true;

//   constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute, private router: Router) {
//     this.initialize2();
//     this.initializeView();
//     this.productForm = this.fb.group({
//       dimensionsGroup: this.fb.group({
//         width: [2, [Validators.required, Validators.pattern("^[0-9]*$"), Validators.min(2)]],
//         height: [2, [Validators.required, Validators.pattern("^[0-9]*$"), Validators.min(2)]],
//         maxDimensions : [this.maxDimensions]
//       }, { validators: checkDimensions} ), 
//       material: [""],
//       finishingOption: ['', [Validators.required]],
//       specialInstructions: [''],
//       quantity: [1, [Validators.required, Validators.pattern("^[0-9]*$")]],
//       isSlit: [false, Validators.required]
//     },)

//     this.validDimensions = this.productForm.get('dimensionsGroup').valid;
//   };

//   ngOnInit() {
//     this.initializeForm(this.productInfo);
//     this.currentPic = this.productDetail.thumbnails[0];
//     this.productForm.get('dimensionsGroup').valueChanges.subscribe(() => {
//       this.validDimensions = this.productForm.get('dimensionsGroup').valid;
//     })
//     console.log(this.productInfo.dimensions.finalDimensions);
//     // this.getProductInfo(this.productId);
//   }


//   handleClick(slide: string, event: MouseEvent) {
//     this.currentPic = this.onThumbnail(slide);
//     this.onLinkClick(event)
//   }

//   onThumbnail(slide: string): string {
//     return slide;
//   }

//   onLinkClick(event: MouseEvent): void {
//     event.preventDefault();
//   }

//   adjustQuantity(increment: boolean): void {
//     if (increment) {
//       this.currentQuantity.update(currentValue => Math.floor(currentValue) + 1);
//       this.quantity++;
//     } else {
//       if (this.validQuantity) {
//         this.currentQuantity.update(currentValue => currentValue - 1);
//         this.quantity--;
//       } else {
//         this.currentQuantity.update(currentValue => Math.floor(currentValue) - 1);
//       }

//     }
//   }

//   updateValue(event) {
//     console.log(event);
//     console.log(parseFloat(event));
//   }

//   onSubmit(){
//     if (this.productForm.valid) {
//       console.log('Form Submitted', this.productForm.value);
//     } else {
//       console.log('Form is invalid');
//       console.log(this.productForm.value);
//     }
//   }

//   updateCurrentQuatity2(currentValue: number): void {
//     this.validQuantity.set(this.isValid(this.currentQuantity))
//     console.log(`${this.currentQuantity()} => ${this.validQuantity()}`);
//     this.currentQuantity.set(this.currentQuantity());
//   }

//   isValid(currentQuantity: Signal<number>): boolean {
//     return /^[+-]?\d+$/.test(String(currentQuantity()));
//   }

//   validateQuantity(quantity: string): boolean {
//     if (isNaN(parseInt(quantity))) {
//       return false;
//     } else {
//       return true;
//     }
//   }

//   getProductInfo(productId: number) {
//     this.productService.getProductById(productId).subscribe((res: IProductAPI2) => {
//       this.productInfo = res;
//       console.log(this.productInfo);
//     })
//   }

//   initializeView() {
//     this.productId = parseInt(this.activatedRoute.snapshot.paramMap.get('productId'));
//     if (isNaN(this.productId)) {
//       console.log("Hello");
//       this.router.navigateByUrl("main");
//     } else {
//       this.getProductInfo(this.productId);
//     }
//   }

//   initializeForm(data?: IProductAPI2) {
//     console.log(data);
//     this.productForm2 = new FormGroup({
//       width: new FormControl(2, [Validators.required, Validators.min(2), Validators.max(data.dimensions.maxDimensionAllowed)]),
//       height: new FormControl(2, [Validators.required, Validators.min(2), Validators.max(data.dimensions.maxDimensionAllowed)]),
//       material: new FormControl(data.materialType, [Validators.required]),
//       finishingOptions: new FormControl(data.finishingOptions, [Validators.required]),
//       quantity: new FormControl(1, [Validators.required, Validators.pattern("^[0-9]*$"), Validators.min(1)])
//     })
//   }

//   getProductInfo2(productId: number) {
//     this.productService.getProductById(productId).subscribe((res: IProductAPI2) => {
//       this.prodcutInfo2 = res;
//       console.log(this.prodcutInfo2);
//     })
//   }

//   initialize2() {
//     this.productId = parseInt(this.activatedRoute.snapshot.paramMap.get('productId'));
//     if (isNaN(this.productId)) {
//       console.log("Hello");
//       this.router.navigateByUrl("main");
//     } else {
//       this.getProductInfo2(this.productId);
//     }
//   }

// }
