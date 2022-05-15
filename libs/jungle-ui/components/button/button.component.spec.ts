import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuiButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: JuiButtonComponent;
  let fixture: ComponentFixture<JuiButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JuiButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuiButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
