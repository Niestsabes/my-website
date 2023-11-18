import { Component, Input } from '@angular/core';
import { ResumeItemInterface } from 'src/app/models/resume.interface';

@Component({
  selector: 'app-home-portefolio',
  templateUrl: './home-portefolio.component.html',
  styleUrls: ['./home-portefolio.component.scss']
})
export class HomePortefolioComponent {
  @Input() public portefolio: Array<ResumeItemInterface>;
}
