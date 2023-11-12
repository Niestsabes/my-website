import { Component, Input } from '@angular/core';
import { IMAGES } from 'src/app/constants/images.dictionary';
import { ROUTES } from 'src/app/constants/routes.dictionary';

@Component({
  selector: 'app-home-assets',
  templateUrl: './home-assets.component.html',
  styleUrls: ['./home-assets.component.scss']
})
export class HomeAssetsComponent {

  public readonly routes = ROUTES;
  public readonly images = IMAGES;

  @Input() public assets: any[];
}
