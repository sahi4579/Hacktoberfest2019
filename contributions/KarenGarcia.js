const aboutMe = [{
  "name" : {
    "firstName" : "Karen",
    "lastName" : "Garcia"
  },
  "language" : [
    "JavaScript",
    "React",
    "CSS",
    "HTML"
  ],
  "website" : "www.sayKaren.com",
  "Journey" : "Programming lights my heart on fire! Started with a simple python Hello World November 2018 and now loving React Hooks!"
}];

const myName = aboutMe[0].name.firstName;
const myJourney = aboutMe[0].Journey;
const contactMe = aboutMe[0].website;
const listOfLanguages = aboutMe[0].language.map(x=>(`Karen loves learning more about ${x}`));

console.log(
    `Hello my name is ${myName}, you can reach me at my website ${contactMe}. 
    Summary of my Journey: ${myJourney}.
    ${listOfLanguages.map(x=>x)}
    `
);

