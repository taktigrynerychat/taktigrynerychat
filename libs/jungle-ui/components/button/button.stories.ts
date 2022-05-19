import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { JuiButtonComponent } from './button.component';

export default {
  title: 'ButtonComponent',
  component: JuiButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<JuiButtonComponent>;

const Template: Story<JuiButtonComponent> = (args: JuiButtonComponent) => ({
  props: args,
});

export const Primary: any = Template.bind({});
Primary.args = {
  text: 'Click me!',
  padding: 0,
  style: 'default',
};
