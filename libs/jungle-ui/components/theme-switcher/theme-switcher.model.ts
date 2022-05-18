import { JuiThemes } from './theme-switcher.config';

interface JuiThemeSwitcherConfig {
  defaultTheme?: JuiThemes | number;
  themesMap: Map<JuiThemes | number, string>;
}

export {
  JuiThemeSwitcherConfig,
};
