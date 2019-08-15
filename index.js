const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () =>  {
  let returnArr = [] //creating an empty array that we can later return

  tutorials.forEach((string) => {
    let upperCasedWordArr = [] 
    let wordArr = string.split(" ")
    wordArr.forEach((word)=>{
      let upperCasedWord = word.charAt(0).toUpperCase() + word.substr(1)
      upperCasedWordArr.push(upperCasedWord)
    })
    let upperCasedString = upperCasedWordArr.join(" ")
    returnArr.push(upperCasedString)
  })
  return returnArr
}

