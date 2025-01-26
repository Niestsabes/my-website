import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-icon',
    templateUrl: './icon.component.html',
    styleUrls: ['./icon.component.scss'],
    standalone: false
})
export class IconComponent implements OnInit {

  @Input('icon') public icon : string;

  constructor() { }

  ngOnInit(): void {
  }

}
