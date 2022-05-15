import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { JuiThemeSwitcherModule } from '@jungle-ui/kit/components/theme-switcher';
import { JuiButtonModule } from '@jungle-ui/kit/components/button';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, JuiButtonModule, JuiThemeSwitcherModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
