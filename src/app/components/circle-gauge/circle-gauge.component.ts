import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-circle-gauge',
  templateUrl: './circle-gauge.component.html',
  styleUrls: ['./circle-gauge.component.scss']
})
export class CircleGaugeComponent implements OnInit {

  /** @description value of the gauge */
  @Input() public value: number;

  /** @description url of the image that will be gauge background */
  @Input() public backgroudUrl: string;

  constructor() { }

  ngOnInit(): void {
  }

}
