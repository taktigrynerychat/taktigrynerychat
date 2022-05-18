import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { debounceTime, filter, skip, tap } from 'rxjs/operators';
import { JUI_DEFAULT_THEME_TOKEN, JUI_THEMES_TOKEN, JuiThemes } from './theme-switcher.config';

@Component({
  selector: 'jui-theme-switcher',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JuiThemeSwitcherComponent implements OnChanges, OnInit {
  @Input()
  public theme: JuiThemes | number = this.defaultTheme;
  @Input()
  public themedWrapperSelector: string = 'body';
  @Input()
  public transition: number = 0;

  private currentTheme: JuiThemes | number;
  private readonly themeChange$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);


  public get wrapperElement(): HTMLElement {
    return this.document.querySelector(this.themedWrapperSelector);
  }

  constructor(
    @Inject(DOCUMENT) private readonly document: Document,
    @Inject(JUI_THEMES_TOKEN) private readonly themes: Map<JuiThemes | number, string>,
    @Inject(JUI_DEFAULT_THEME_TOKEN) private readonly defaultTheme: JuiThemes | number,
  ) {
  }

  public ngOnChanges(changes: SimpleChanges): void {
    const theme: JuiThemes | number = changes['theme']?.currentValue;

    if (theme !== null && theme !== this.currentTheme) {
      const currentThemeClass: string = this.getThemeClass(theme);
      if (currentThemeClass) {
        this.transition && this.themeChange$.next(true);
        this.wrapperElement.setAttribute('data-jui-theme', currentThemeClass);
        this.currentTheme = this.theme;
      } else {
        console.warn(`There is no theme with ID:${ theme } in provided themes map`);
      }
    }
  }

  public ngOnInit(): void {
    this.transition && this.addTransition();
  }

  private getThemeClass(theme: JuiThemes): string {
    return this.themes.get(theme);
  }

  private addTransition(): void {
    this.themeChange$
      .pipe(
        // TODO: Add takeUntil()
        filter((hasChanged: boolean) => hasChanged),
        skip(1),
        tap(() => {
          this.wrapperElement.style.transition = `${ this.transition }ms`;
        }),
        debounceTime(this.transition),
      )
      .subscribe(() => {
        this.wrapperElement.style.transition = null;
      });
  }

}
