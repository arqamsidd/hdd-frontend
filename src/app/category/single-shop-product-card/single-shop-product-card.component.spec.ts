import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleShopProductCardComponent } from './single-shop-product-card.component';

describe('SingleShopProductCardComponent', () => {
  let component: SingleShopProductCardComponent;
  let fixture: ComponentFixture<SingleShopProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleShopProductCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleShopProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
