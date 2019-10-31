import { add, minus, multiply } from './my_operations';

describe("Add Operation", () => {
  test('Should return 3 if add 1 with 2', () => {
    expect(add(1, 2)).toBe(3);
  });
  
  test('Should return 4 if add 2 with 2', () => {
    expect(add(2, 2)).toBe(4);
  });  
});

describe('Minus Operation', () => {
  test('Should return 1 if minus 4 with 3', () => {
    expect(minus(4, 3)).toBe(1);
  });

  test('Should return -2 if minus 1 with 3', () => {
    expect(minus(1, 3)).toBe(-2);
  });
});


