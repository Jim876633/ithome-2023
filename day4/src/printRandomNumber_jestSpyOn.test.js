import printRandomNumber from "./printRandomNumber_jestSpyOn";
import random from './utils/randomNumber_jestSpyOn.js'

// jest.spyOn(object, methodName)

// jest.spyOn(random, 'randomNumber')
// jest.spyOn(random, 'randomEvenNumber')

// jest.fn()

random.randomNumber = jest.fn()
random.randomEvenNumber = jest.fn()

describe('printRandomNumber function', () => {
  it('if randomNumber is 50, printRandomNumber should return "My number is 50"', () => {
    random.randomNumber.mockReturnValue(51)
    random.randomEvenNumber.mockReturnValue(52)
    const result = printRandomNumber()
    expect(result).toEqual('My number is 51. My even number is 52')
  })
});
