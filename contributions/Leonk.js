const info = {
  Name: "Leon",
  Location: "Magdeburg - Germany",
  Age: "18",
  Jobs: ["Web development", "Game development"],
  Reason: "I way always interested in numbers and was curious how games or websites store and work with user data too"
}

const message = `Hey, my name is ${info.Name} and Im living in ${info.Location}, I'm ${info.Age} years old and I work on ${info.Jobs.join(' and ')}.\nI became a developer, because ${info.Reason}.`;

console.log(message);