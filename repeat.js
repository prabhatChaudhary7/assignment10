function findRepeatedCharacters(word) {
    const charCount = {};
    const lowerCasedWord = word.toLowerCase();
    for (let char of lowerCasedWord) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }
    let repeatedChars = false;
    for (let char in charCount) {
        if (charCount[char] > 1) {
            console.log(`${char} - ${charCount[char]} times`);
            repeatedChars = true;
        }
    }
    if (!repeatedChars) {
        console.log("No characters are repeated more than once.");
    }
}

const input1 = 'hello';
const input2 = 'world';

console.log(`Input: ${input1}`);
findRepeatedCharacters(input1);  

console.log(`\nInput: ${input2}`);
findRepeatedCharacters(input2);  
