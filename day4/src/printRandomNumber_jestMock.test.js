import printRandomNumber from './printRandomNumber_jestMock'
import randomNumber from "./utils/randomNumber";

jest.mock('./utils/randomNumber.js')

describe('printRandomNumber function', () => {
  it('if randomNumber is 50, printRandomNumber should return "My number is 50"', () => {
    randomNumber.mockReturnValue(50)
    const result = printRandomNumber()
    expect(result).toEqual('My number is 50')
  })
})


