import { FormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { JuiThemeSwitcherComponent } from '../theme-switcher.component';
import { JuiThemes } from '../theme-switcher.config';
import { JuiThemeSwitcherModule } from '../theme-switcher.module';

export default {
  title: 'JuiThemeSwitcherComponent',
  component: JuiThemeSwitcherComponent,
  argTypes: {
    theme: {
      options: [JuiThemes.dark, JuiThemes.light],
      control: {type: 'radio'},
    },
  },
  decorators: [
    moduleMetadata({
      imports: [JuiThemeSwitcherModule, FormsModule],
    }),
  ],
} as Meta<JuiThemeSwitcherComponent>;

const Template: Story<JuiThemeSwitcherComponent> = (args: JuiThemeSwitcherComponent) => ({
  props: args,
});

export const Light: Story<JuiThemeSwitcherComponent> = Template.bind({});
Light.args = {
  theme: JuiThemes.light,
};

export const Dark: Story<JuiThemeSwitcherComponent> = Template.bind({});
Dark.args = {
  theme: JuiThemes.dark,
};
