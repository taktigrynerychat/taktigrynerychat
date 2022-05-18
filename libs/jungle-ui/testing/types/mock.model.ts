type MockOf<T, R = any> = { [key in keyof T]?: R };

export {
  MockOf,
};
