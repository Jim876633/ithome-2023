import sum from './sum.js';

describe('sum function', () => {
  it('should return the sum of two positive numbers', () => {
    const result = sum(3, 5);
    expect(result).toBe(8);
  });

  it('should return the sum of a positive and a negative number', () => {
    const result = sum(10, -5);
    expect(result).toBe(5);
  });

  it('should return the sum of two negative numbers', () => {
    const result = sum(-8, -3);
    expect(result).toBe(-11);
  });

  it('should return zero if both arguments are zero', () => {
    const result = sum(0, 0);
    expect(result).toBe(0);
  });
});
