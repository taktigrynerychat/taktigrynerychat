import { DOCUMENT } from '@angular/common';
import { ComponentFixture, fakeAsync, flush, TestBed, tick } from '@angular/core/testing';

import { JuiThemeSwitcherComponent } from '../theme-switcher.component';
import { mockChanges, mockEmptyChanges, mockHtmlElement, mockTransition, mockWrongChanges } from './theme-switcher.set';
import SpyInstance = jest.SpyInstance;

describe('JuiThemeSwitcherComponent', () => {
  let component: JuiThemeSwitcherComponent;
  let document: Document;
  let fixture: ComponentFixture<JuiThemeSwitcherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JuiThemeSwitcherComponent],
    })
      .overrideTemplate(JuiThemeSwitcherComponent, '<span></span>');
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuiThemeSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    document = TestBed.inject(DOCUMENT);
  });

  it('Should be created', () => {
    expect(component).toBeTruthy();
  });

  describe('[Function: ngOnInit()]', () => {
    it('Shouldn\'t add transition if value wasn\'t provided', fakeAsync(() => {
      component.ngOnInit();
      const spyWrapperElement: SpyInstance = jest.spyOn(component, 'wrapperElement', 'get');

      for (let i: number = 0; i < 2; i++) {
        component['themeChange$'].next(true);
      }
      flush();

      expect(spyWrapperElement).not.toHaveBeenCalled();
    }));

    it('Should add transition to a wrapper element if the value is provided', fakeAsync(() => {
      component.transition = mockTransition;
      jest.spyOn(component, 'wrapperElement', 'get').mockReturnValue(mockHtmlElement as HTMLElement);

      component.ngOnInit();
      for (let i: number = 0; i < 2; i++) {
        component['themeChange$'].next(true);
      }
      flush();

      expect((mockHtmlElement as HTMLElement).style.transition).toBe(`${ mockTransition }ms`);

      tick(mockTransition);

      expect((mockHtmlElement as HTMLElement).style.transition).toBeFalsy();
    }));
  });

  describe('[Function: ngOnChanges()]', () => {
    it('Shouldn\'t change theme if changes doesn\'t contain theme field', () => {
      const spyWrapperElement: SpyInstance = jest.spyOn(component, 'wrapperElement', 'get');
      component.ngOnChanges({});

      expect(spyWrapperElement).not.toHaveBeenCalled();
    });

    it('Shouldn\'t change theme if new value is null', () => {
      const spyWrapperElement: SpyInstance = jest.spyOn(component, 'wrapperElement', 'get');
      component.ngOnChanges(mockEmptyChanges);

      expect(spyWrapperElement).not.toHaveBeenCalled();
    });

    it('Shouldn\'t change theme if new value isn\'t contained in themes array', () => {
      const spyWrapperElement: SpyInstance = jest.spyOn(component, 'wrapperElement', 'get');
      const spyWarn: SpyInstance = jest.spyOn(console, 'warn');
      component.ngOnChanges(mockWrongChanges);

      expect(spyWrapperElement).not.toHaveBeenCalled();
      expect(spyWarn).toHaveBeenCalledWith(`There is no theme with ID:${ mockWrongChanges['theme'].currentValue } in provided themes map`);
    });

    it('Shouldn\'t change theme if new value is null', () => {
      const spyWrapperElement: SpyInstance = jest.spyOn(component, 'wrapperElement', 'get');
      component.ngOnChanges(mockEmptyChanges);

      expect(spyWrapperElement).not.toHaveBeenCalled();
    });

    it('Should change theme if new value is different and presented in a themes array', () => {
      const spyWrapperElement: SpyInstance = jest.spyOn(component, 'wrapperElement', 'get').mockReturnValue(mockHtmlElement as HTMLElement);
      component.ngOnChanges(mockChanges);

      expect(spyWrapperElement).toHaveBeenCalled();
      expect(mockHtmlElement.setAttribute.mock.calls[0]).toMatchSnapshot();
    });
  });

});
