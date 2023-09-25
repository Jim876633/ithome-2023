import printRandomNumber from './printRandomNumber_jestFn'

describe('jest.fn test', () => {
  it('mock return value is 50', () => {
    const mockFn = jest.fn()
    mockFn.mockReturnValue(50)
    expect(mockFn()).toEqual(50)
  })
})

describe('printRandomNumber function', () => {
  it('if randomNumber is 50, printRandomNumber should return "My number is 50"', () => {
    const mockRandomNumber = jest.fn()
    mockRandomNumber.mockReturnValue(50)
    const result = printRandomNumber(mockRandomNumber)
    expect(result).toEqual('My number is 50')
  })
})
