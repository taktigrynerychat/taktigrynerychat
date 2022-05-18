import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'taktigrynerychat-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title: string = 'ui';
  flag: boolean = true;

  public ngOnInit(): void {
    this.title = 'hello';
  }

  public untestedFunction(): void {
    this.title = 'not hello';
  }
}
