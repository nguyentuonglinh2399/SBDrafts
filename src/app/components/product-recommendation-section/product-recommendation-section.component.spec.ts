import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRecommendationSectionComponent } from './product-recommendation-section.component';

describe('ProductRecommendationSectionComponent', () => {
  let component: ProductRecommendationSectionComponent;
  let fixture: ComponentFixture<ProductRecommendationSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductRecommendationSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductRecommendationSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
