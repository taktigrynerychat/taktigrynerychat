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
    console.log("Hello");
  }
}
