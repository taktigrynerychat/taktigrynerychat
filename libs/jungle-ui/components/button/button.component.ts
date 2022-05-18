import { Component, Input } from '@angular/core';

@Component({
  selector: 'jui-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class JuiButtonComponent {
  @Input() public text: string = '123';
}
