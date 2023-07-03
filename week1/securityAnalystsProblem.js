// 1. convert string to array
// 2. Detect threat level
// 3. Check for occurrence of keywords to letters (string)

//convert string to array
let convertToArray = (str) => {
  return str.split(" ");
};

// detect threat level

let detectThreatLevel = (threats) => {
  let wordsFound = [];
  let threatCounter = 0;
  for (const [key, value] of threats) {
    wordsFound.push(value);
    if (value > threatCounter) {
        threatCounter = value
    }
  }
  return {
    flaggedWords: wordsFound,
    threatLevel: threatCounter == 1 ? "Risky" : threatCounter == 2 ? "Critical" : "Demon"
  }
};

// Check for occurrence of keywords

let keyWordsOccurrence = (str, keywords) => {

}