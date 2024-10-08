import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductGroupDisplayComponent } from './product-group-display.component';

describe('ProductGroupDisplayComponent', () => {
  let component: ProductGroupDisplayComponent;
  let fixture: ComponentFixture<ProductGroupDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductGroupDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductGroupDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
