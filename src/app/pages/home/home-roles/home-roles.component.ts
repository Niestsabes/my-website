import { Component, Input } from '@angular/core';
import { ResumeRolesInterface } from 'src/app/models/resume.interface';

@Component({
  selector: 'app-home-roles',
  templateUrl: './home-roles.component.html',
  styleUrls: ['./home-roles.component.scss']
})
export class HomeRolesComponent {
  @Input() roleItem: ResumeRolesInterface;
}
