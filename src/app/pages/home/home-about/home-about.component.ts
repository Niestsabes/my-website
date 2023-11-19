import { Component, Input } from '@angular/core';
import { IMAGES } from 'src/app/constants/images.dictionary';
import { Resume } from 'src/app/models/resume';

@Component({
  selector: 'app-home-about',
  templateUrl: './home-about.component.html',
  styleUrls: ['./home-about.component.scss']
})
export class HomeAboutComponent {
  @Input() public resume: Resume;
  public readonly images = IMAGES;
}
