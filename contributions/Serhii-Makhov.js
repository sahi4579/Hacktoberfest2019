const firstName = 'Serhii'
const lastName = 'Makhov'
const fullName = `${firstName} ${lastName}`
const reasons = ['I like to create something new', 'Challenging my mind is awesome', 'It is fun']

const text = `Hi! My name is ${fullName}. I've decided to become programmer because of ${reasons.length} reason${reasons.length > 1 ? 's' : ''}:
${reasons.map(reason => `\n - ${reason}`)} `
console.log(text)