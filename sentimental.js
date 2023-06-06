function calculateSentiment(text) {
  text = text.trim().toLowerCase()
  text = text.replace(/[^('|’|\-|\+)?\w\s\d?]/g, '') //remoce unnecessary characters
  var words = text.split(" ")
  let totalSentiment = 0

  //Get the unique values of the array, words (to prevent repeatition)
  words = new Set(words);
  words = [...words]
  alert(words)
  words.map(word => {
    if (/^\s*$/.test(word) === false) {
      //n't detection
      var regnt = /n\'t|n’t/g
      var matchRegnt = word.match(regnt) //tells what was matched
      if (matchRegnt) {
        //  alert(word)
        //access words like don't, won't...
        var wordForNt = word
        wordForNt = wordForNt.replace(regnt, ` ${matchRegnt}`)
        //word is now like do n't wo n't
        wordForNt = wordForNt.split(' ') //since there is space, split!
        //  console.log(wordForNt)
        wordForNt.map(innerWordForNt => { //go through each of the word in array, surely  n't will be detected.
          if (((innerWordForNt === 'n\’t' || innerWordForNt === 'n\'t') && ('n\'t' !== 'n’t'))) { //this block tells that n't and n’t are the same
            var regnt1 = 'n\'t'
            var regnt2 = 'n’t'
            regnt2 = regnt1
            innerWordForNt = regnt1
          }
          if (sentimentDictionary.hasOwnProperty(innerWordForNt)) {
            totalSentiment += sentimentDictionary[innerWordForNt]
          }
        })
      }
      //other part...
      if (sentimentDictionary.hasOwnProperty(word)) {
        totalSentiment += sentimentDictionary[word]
      }
    }
  })

  return totalSentiment.toFixed(3)
}

// Example usage:
const sentimentDictionary = {
  good: 3,
  excit: 4,
  amaze: 3,
  insult: -4.7,
  hard: 1.2,
  success: 4.9,
  happy: 4,
  excellent: 5,
  bad: -3,
  sad: -4,
  terrible: -5,
  angrer: -5,
  glad: 4,
  great: 4,
  not: -1,
  'n\'t': -1,
  nope: -1,
  never: -2.5,
  nice: 3.5,
  positive: 5,
  negative: -5,
  '+ve': 5,
  '-ve': -5,
  correct: 2.2,
  incorrect: -2.2,
  thank: 4,
  ungrateful: -4.9,
  grateful: 3.9,
  depress: -4,
  hate: -4.9,
  love: 5,
  dislike: -3.7,
  like: 3.7,
  wrong: 2.9,
  joy: 4.1,
  fun: 4.5,
  comedy: 4.5,
  yay: 4.1,
  evil: -5,
  devastate: -4.9,
  pain: -5,
  adventure: 3.4,
  brave: 3.4,
  enjoy: 3.6,

}
var text = "thank you so much, i like and enjoy the code."
const sentimentScore = calculateSentiment(text)
console.log(`Sentiment score: ${sentimentScore}`)