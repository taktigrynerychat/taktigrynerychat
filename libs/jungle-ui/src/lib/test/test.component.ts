import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jun-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  public field: Array<object>;

  constructor() {}

  ngOnInit(): void {}
}
