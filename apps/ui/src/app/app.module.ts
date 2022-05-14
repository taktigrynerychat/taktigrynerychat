import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JuiButtonModule } from '@jungle-ui/kit/components/button';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, JuiButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
