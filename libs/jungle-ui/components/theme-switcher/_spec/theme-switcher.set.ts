import { SimpleChange, SimpleChanges } from '@angular/core';
// TODO: Move package to testing library
import { MockOf } from '../../../testing';
import { JuiThemes } from '../theme-switcher.config';
import Mock = jest.Mock;

const mockHtmlElement: MockOf<HTMLElement> = {
  setAttribute: jest.fn(),
  style: {},
};

const mockChanges: SimpleChanges = {
  theme: {
    currentValue: JuiThemes.dark,
  } as SimpleChange,
};

const mockEmptyChanges: SimpleChanges = {
  theme: {
    currentValue: null,
  } as SimpleChange,
};

const mockWrongChanges: SimpleChanges = {
  theme: {
    currentValue: -123,
  } as SimpleChange,
};


const mockTransition: number = 100;

export {
  mockHtmlElement,
  mockTransition,
  mockChanges,
  mockEmptyChanges,
  mockWrongChanges,
};
