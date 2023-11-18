import { Component, Input } from '@angular/core';
import { Resume } from 'src/app/models/resume';

@Component({
  selector: 'app-home-presentation',
  templateUrl: './home-presentation.component.html',
  styleUrls: ['./home-presentation.component.scss']
})
export class HomePresentationComponent {
  @Input() public resume: Resume;
}
