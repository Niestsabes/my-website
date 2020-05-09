import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-circle-gauge',
  templateUrl: './circle-gauge.component.html',
  styleUrls: ['./circle-gauge.component.scss']
})
export class CircleGaugeComponent implements OnInit {

  /** @description value of the gauge */
  @Input() public value: number;

  /** @description text to dislay in the gauge */
  @Input() public text: string;

  /** @description url of the image that will be gauge background */
  @Input() public backgroundUrl: string;

  constructor() { }

  ngOnInit(): void {
  }

}
