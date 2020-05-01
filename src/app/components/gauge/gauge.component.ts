import { Component, OnInit, ViewChild, Input, ElementRef } from '@angular/core';
import { AnimationFactory, AnimationBuilder, animate, style, AnimationPlayer } from '@angular/animations';

@Component({
  selector: 'app-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.scss']
})
export class GaugeComponent implements OnInit {

  @ViewChild('gaugeFiller') public gaugeFiller: ElementRef;
  @Input('title') public title: string;
  @Input('value') public value: number = 0;
  public maxValue: number = 100;

  private player: AnimationPlayer;

  constructor(public _animationBuilder : AnimationBuilder) { }

  ngOnInit() {}

  ngAfterViewInit() {
    this.fillGauge();
  }

  /**
   * @description Triggers animation when mouse enter the component
   */
  public onMouseEnter() : void {
    const animation : AnimationFactory = this._animationBuilder.build([
      animate(100, style(
        {
          "background-color": "rgb(130, 130, 255)",
          transition: "all 0 linear;",
        })
      )
    ]);

    this.player = animation.create(this.gaugeFiller.nativeElement);
    this.player.play();
  }

  /**
   * @description Triggers animation when mouse quit the component
   */
  public onMouseExit() : void {
    const animation : AnimationFactory = this._animationBuilder.build([
      animate(100, style(
        {
          "background-color": "rgb(150, 150, 200)",
          transition: "all 0 linear;",
        })
      )
    ]);

    this.player = animation.create(this.gaugeFiller.nativeElement);
    this.player.play();
  }

  /**
   * @description Creates the gauge's animation
   */
  private fillGauge() : void {
    const fillRate = Math.max(Math.min(this.value / this.maxValue, 1), 0) * 100;
    const animation : AnimationFactory = this._animationBuilder.build([
      animate(0, style(
        {
          width: `${fillRate}%`,
          transition: "all 0 linear;",
        })
      )
    ]);

    this.player = animation.create(this.gaugeFiller.nativeElement);
    this.player.play();
  }
}
