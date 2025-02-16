import { Component, input } from '@angular/core';

@Component({
    selector: 'app-icon',
    templateUrl: './icon.component.html',
})
export class IconComponent {

	public readonly icon = input<string>();

}
