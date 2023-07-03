// 1. convert string to array
// 2. Detect threat level
// 3. Check for occurrence of keywords to letters (string)

let threats_ = new Map();
threats_.set("betray", 3);
threats_.set("elon", 1);
threats_.set("pikachu", 1);

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
      threatCounter = value;
    }
  }
  return {
    flaggedWords: wordsFound,
    threatLevel:
      threatCounter == 1 ? "Risky" : threatCounter == 2 ? "Critical" : "Demon",
  };
};

detectThreatLevel(threats_);


// Check for occurrence of keywords
let keyWordsOccurrence = (str, keywords) => {
  let threats = new Map();

  const arrWords = convertToArray(str);
  // loop through str
  // check if keyword include word
  // if str === keyword increase count
  // if keyword already exist

  for (const value of arrWords) {
    if (keywords.includes(value)) {
      if (threats.has(value)) {
        let wordCount = threats.get(value);
        threats.set(value, wordCount++);
      } else {
        threats.set(value, 1)
      }
    }
    
  }

  return detectThreatLevel(threats);
};
