function randomNumber() {
  return Math.floor(Math.random() * 100);
}

function randomEvenNumber() {
  return Math.floor(Math.random() * 50) * 2;
}

export default { randomNumber, randomEvenNumber }