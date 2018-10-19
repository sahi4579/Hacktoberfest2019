class Developer {
    constructor(name, age, job, goal, answer) {
        this.developer = {
            Name: name,
            Age: age,
            Job: job,
            Goal: goal,
            Answer: answer
        }
    }
    sayName() {
            console.log(`Hi! I'm ${this.developer.Name}.`)
    }
    sayAge() {
            console.log(`And I'm ${this.developer.Age} years old.`)
    }
    sayJob() {
            console.log(`I am currently working as a ${this.developer.Job}.`);
    }
    sayGoal() {
            console.log(`My goal for the near future is to work as a ${this.developer.Goal}.`);
    }
    sayWhy() {
            console.log(`I want to be a developer because ${this.developer.Answer}.`);
    }
} 

const MattRudin = new Developer('Matt', 29, 'project manager', 'web developer', 'I like to solve problems and since I was a little kid I was eager to play and work with computers')

MattRudin.sayName();
MattRudin.sayAge();
MattRudin.sayJob();
MattRudin.sayGoal();
MattRudin.sayWhy();