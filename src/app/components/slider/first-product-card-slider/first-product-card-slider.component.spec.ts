import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstProductCardSliderComponent } from './first-product-card-slider.component';

describe('FirstProductCardSliderComponent', () => {
  let component: FirstProductCardSliderComponent;
  let fixture: ComponentFixture<FirstProductCardSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstProductCardSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstProductCardSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
