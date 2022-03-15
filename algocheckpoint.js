// At this checkpoint, you are asked to write an algorithm that read a sentence, which ends with a point, character by character, and to determine:

// The length of the sentence (the number of characters).
// The number of words in the sentence (assuming that the words are separated by a single space).
// The number of vowels in the sentence.
// You have to keep in mind that: 

// Each character will be treated separately.
// The last character is the point.
// Use three variables as counters.

let sentence = 'I love to code.';

function sentenceReader(sentence){
  console.log(`The number of characters are ${sentence.length}`);
  console.log(`The number of words is ${sentence.split(' ').length}`);
  for(i = 0; i < sentence.length; i++){
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    // for(vowel of vowels){
    //   if (vowel[i] === sentence[i]) {
    //     console.log(`The number of vowels is...`);
    //   }
    // }
  }
}

sentenceReader(sentence);