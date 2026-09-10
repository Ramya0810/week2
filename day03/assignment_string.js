//Example1

// function splitted(){

// let s="hellow world";
// let splittedString=s.split(" ");
// console.log(splittedString);
// let lastWord=splittedString[splittedString.length-1];
// console.log(lastWord);
// let LastWordLenght=lastWord.length;
// console.log(LastWordLenght)
// }
//splitted();
//splllted1(string a)
//Example 2
function splitted(){

let s="fly me to the moon";
let splittedString=s.split(" ");
console.log(splittedString);
let lastWord=splittedString[splittedString.length-1];
console.log(lastWord);
let LastWordLenght=lastWord.length;
console.log(LastWordLenght)
}
splitted();

//Example 3
function isAnagram(word1, word2) {
  let sortedWord1 = word1.split("").sort().join("");
  let sortedWord2 = word2.split("").sort().join("");

  if (sortedWord1 === sortedWord2) {
    return true;
  } else {
    return false;
  }
}


console.log(isAnagram("listen", "silent"));
console.log(isAnagram("hello", "world"));   