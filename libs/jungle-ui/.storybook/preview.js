import { setCompodocJson } from '@storybook/addon-docs/angular';
import docJson from '../../../documentation.json';
setCompodocJson(docJson);

export const parameters = {
  docs: {
    inlineStories: true,
  },
  previewTabs: {
    canvas: {
      title: "Overview"
    },
    "storybook/docs/panel": {
      title: "Docs"
    }
  },
  layout: "centered"
}
