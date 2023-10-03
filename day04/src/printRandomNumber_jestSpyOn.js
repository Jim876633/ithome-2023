import random from './utils/randomNumber_jestSpyOn.js'

function printRandomNumber() {
  return `My number is ${random.randomNumber()}. My even number is ${random.randomEvenNumber()}`
}

export default printRandomNumber;
