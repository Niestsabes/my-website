import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-gauge',
  templateUrl: './star-gauge.component.html',
  styleUrls: ['./star-gauge.component.scss']
})
export class StarGaugeComponent implements OnInit {

  @Input() public value: number;
  private _maxValue: number = 100;
  private _totalNumberOfStars: number = 5;

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * @description Create handler to display empty stars
   * @returns list with a length equal to the number of stars to display
   */
  public getEmptyStars(): Array<number> {
    let res = [];
    for(let i = 1; i <= this._totalNumberOfStars; i++) {
      if (this.value < (i - 0.5) * this.filledStarRate) {
        res.push(i);
      }
    }
    return res;
  }

  /**
   * @description Create handler to display half stars
   * @returns list with a length equal to the number of stars to display
   */
  public getHalfStars(): Array<number> {
    if (this.getEmptyStars().concat(this.getFullStars()).length < this._totalNumberOfStars ) {
      return [1]
    }
    return [];
  }

  /**
   * @description Create handler to display full stars
   * @returns list with a length equal to the number of stars to display
   */
  public getFullStars(): Array<number> {
    let res = [];
    for(let i = 1; i <= this._totalNumberOfStars; i++) {
      if (this.value >= i * this.filledStarRate ) {
        res.push(i);
      }
    }
    return res;
  }

  get filledStarRate(): number {
    return this._maxValue / this._totalNumberOfStars;
  }
}
