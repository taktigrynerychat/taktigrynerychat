import { FormsModule } from '@angular/forms';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { JuiThemeSwitcherComponent } from './theme-switcher.component';

export default {
  title: 'JuiThemeSwitcherComponent',
  component: JuiThemeSwitcherComponent,
  decorators: [
    moduleMetadata({
      imports: [FormsModule],
    }),
  ],
} as Meta<JuiThemeSwitcherComponent>;

const Template: Story<JuiThemeSwitcherComponent> = (args: JuiThemeSwitcherComponent) => ({
  props: args,
  template: `
    <input
      type="checkbox"
      id="theme"
      [(ngModel)]="currentTheme"
    >
    <label for="theme">dark theme</label>
    <jui-theme-switcher
      [theme]="currentTheme ? 1 : 0"
      [transition]="500"
    ></jui-theme-switcher>
  `,
});

export const Primary: any = Template.bind({});
Primary.args = {
  currentTheme: 0,
};
