import { InjectionToken } from '@angular/core';

enum JuiThemes {
  light,
  dark
}

const JUI_THEMES_MAP: Map<number, string> = new Map<number, string>([
  [JuiThemes.light, 'light'],
  [JuiThemes.dark, 'dark'],
]);

const JUI_THEMES_TOKEN: InjectionToken<Map<number, string>> = new InjectionToken<Map<number, string>>(
  'JUI_THEMES_TOKEN',
  {
    factory: () => JUI_THEMES_MAP,
  },
);

const JUI_DEFAULT_THEME_TOKEN: InjectionToken<JuiThemes | number> = new InjectionToken<JuiThemes | number>(
  'JUI_DEFAULT_THEME',
  {
    factory: () => JuiThemes.light,
  },
);

export {
  JuiThemes,
  JUI_THEMES_TOKEN,
  JUI_DEFAULT_THEME_TOKEN,
};
