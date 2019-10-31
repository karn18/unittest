const fizzbuzz = require('./fizzbuzz');

describe("FizzBuzz", () => {
  test('return 1 if number is 1', () => {
    const number = 1;
    const result = fizzbuzz(number);
    expect(result).toBe(1);
  });

  test('return Fizz if number is 3', () => {
    const number = 3;
    const result = fizzbuzz(number);
    expect(result).toEqual("Fizz");
  });

  test('return Buzz if number is 5', () => {
    const number = 5;
    const result = fizzbuzz(number);
    expect(result).toEqual("Buzz");
  });

  test('return Fizz if number is 9', () => {
    const number = 9;
    const result = fizzbuzz(number);
    expect(result).toEqual("Fizz");
  });

  test('return 13 if number is 13', () => {
    const number = 13;
    const result = fizzbuzz(number);
    expect(result).toBe(13);
  });

  test('return FizzBuzz if number is 15', () => {
    const number = 15;
    const result = fizzbuzz(number);
    expect(result).toEqual("FizzBuzz");
  });

  test('return FizzBuzz if number is 45', () => {
    const number = 45;
    const result = fizzbuzz(number);
    expect(result).toEqual("FizzBuzz");
  });

  test('return 47 if number is 47', () => {
    const number = 47;
    const result = fizzbuzz(number);
    expect(result).toEqual(47);
  });

  test('return Error if number is -1', () => {
    const number = -1;
    const result = fizzbuzz(number);
    expect(result).toEqual("Error");
  });
})

