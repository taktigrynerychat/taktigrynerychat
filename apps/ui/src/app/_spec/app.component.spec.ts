import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from '../app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
    })
      .overrideTemplate(AppComponent, '<span></span>');
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('Should be created', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit()', () => {
    it('Should change the title', () => {
      component.ngOnInit();

      expect(component.title).toBe('hello');
    });
  });
});
