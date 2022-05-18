type MockOf<T> = { [key in keyof T]?: unknown };

export {
  MockOf,
};
