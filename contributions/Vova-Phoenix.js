let authorName = 'Vova';
let authorSurname = 'Phoenix';

var authorStory = {
	age: 28,
	city: 'Chernivtsi',
	nowPlaying: '\'Runaway Baby by Bruno Mars\'',
	diagnosis: 'Perfectionism',
	answer: 'Making new things that run on PC and are available for others on the Internet is exciting for me. Besides that I love drums and flawlessness'
};

console.log(`Yo from ${authorName} ${authorSurname}! 
I\'m ${authorStory.age} and I was born in ${authorStory.city}. ${authorStory.answer}. Due to the latter point I spend a lot of time on getting things done but helps me to not overlook things in programming). That\'s called ${authorStory.diagnosis}. 
BTW, right now ${new Date().getSeconds() % 12 === 0 ? `${authorStory.nowPlaying}` : 'nothing'} is playing.
`);