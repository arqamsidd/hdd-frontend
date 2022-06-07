import { Component, OnInit } from '@angular/core';
import { Options, LabelType } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-filter-slider',
  templateUrl: './filter-slider.component.html',
  styleUrls: ['./filter-slider.component.css']
})
export class FilterSliderComponent implements OnInit {
  
  minValue = 0;
  maxValue = 9999999999;
  options: Options = {
    floor: 0,
    ceil: 0,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return '$' + value;
        case LabelType.High:
          return '$' + value;
        default:
          return '$' + value;
      }
    },
  };
  constructor() { }

  ngOnInit(): void {
  }

}
