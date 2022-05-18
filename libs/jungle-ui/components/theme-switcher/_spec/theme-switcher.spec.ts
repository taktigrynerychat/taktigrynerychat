import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JuiThemeSwitcherComponent } from '@jungle-ui/kit';

describe('JuiThemeSwitcherComponent', () => {
  let component: JuiThemeSwitcherComponent;
  let fixture: ComponentFixture<JuiThemeSwitcherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JuiThemeSwitcherComponent],
    })
      .overrideTemplate(JuiThemeSwitcherComponent, '<span></span>');
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuiThemeSwitcherComponent);
    component = fixture.componentInstance;
  });

  it('Should be created', () => {
    expect(component).toBeTruthy();
  });

});
