import { Component, Input } from '@angular/core';
import { ResumeExperienceInterface } from 'src/app/models/resume.interface';

@Component({
  selector: 'app-home-experiences',
  templateUrl: './home-experiences.component.html',
  styleUrls: ['./home-experiences.component.scss']
})
export class HomeExperiencesComponent {
  @Input() public experiences: ResumeExperienceInterface[];

  ngOnInit(): void {
    console.log(this.experiences)
  }

  public accordionOpenedIndex: number = -1;

  public toggleAccordion(index: number): void {
    this.accordionOpenedIndex = this.accordionOpenedIndex === index ? -1 : index;
  }
}
