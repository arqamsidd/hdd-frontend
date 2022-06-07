import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterSimpleSelectComponent } from './filter-simple-select.component';

describe('FilterSimpleSelectComponent', () => {
  let component: FilterSimpleSelectComponent;
  let fixture: ComponentFixture<FilterSimpleSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterSimpleSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterSimpleSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
