import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFinderComponent } from './product-finder.component';

describe('ProductFinderComponent', () => {
  let component: ProductFinderComponent;
  let fixture: ComponentFixture<ProductFinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductFinderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
