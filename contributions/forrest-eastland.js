function getRandomAnswer(answers) {
  let answerChoice = Math.floor(Math.random() * Math.floor(answers.length));
  return answers[answerChoice];
};

const answers = ['I like to code!', 'I like to problem solve!', 'I like learning everyday!'];

console.log(`Forrest's answers below`);
console.log('Why I code:', getRandomAnswer(answers));
