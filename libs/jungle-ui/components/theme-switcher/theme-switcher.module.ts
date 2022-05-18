import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JUI_DEFAULT_THEME_TOKEN, JUI_THEMES_TOKEN } from './theme-switcher.config';
import { JuiThemeSwitcherConfig } from './theme-switcher.model';
import { JuiThemeSwitcherComponent } from './theme-switcher.component';

@NgModule({
  declarations: [
    JuiThemeSwitcherComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    JuiThemeSwitcherComponent,
  ],
})
export class JuiThemeSwitcherModule {
  public static forRoot(themeSwitcherConfig: JuiThemeSwitcherConfig): ModuleWithProviders<JuiThemeSwitcherModule> {
    return {
      ngModule: this,
      providers: [
        {
          provide: JUI_THEMES_TOKEN,
          useValue: themeSwitcherConfig.themesMap,
        },
        {
          provide: JUI_DEFAULT_THEME_TOKEN,
          useValue: themeSwitcherConfig.defaultTheme ?? themeSwitcherConfig.themesMap.values().next().value,
        },
      ],
    };
  }
}
