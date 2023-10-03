import sum from './sum';

describe('sum', () => {
  it('adds two positive numbers', () => {
    expect(sum(2, 3)).toBe(5);
  });

  it('adds a positive and a negative number', () => {
    expect(sum(2, -3)).toBe(-1);
  });

  it('adds two negative numbers', () => {
    expect(sum(-2, -3)).toBe(-5);
  });

  it('adds two decimal numbers', () => {
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
  });
});