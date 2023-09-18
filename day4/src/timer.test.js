import timer from './timer';
jest.useFakeTimers();

describe('timer', () => {
  beforeEach(() => {
    jest.clearAllTimers();
  })
  it('should resolve with "time out" after 3 seconds', async () => {
    const promise = timer();
    jest.advanceTimersByTime(3000);
    const result = await promise
    expect(result).toBe('time out');
  });
  it('should resolve with "time out" after 3 seconds', async () => {
    const promise = timer();
    jest.runAllTimers();
    const result = await promise
    expect(result).toBe('time out');
  });
});
