var prompt = require('prompt-sync')();

var stringInput = (prompt("Enter a string "));
var letterInput = (prompt("Enter a letter "));

//
const reverseString = () => stringInput.split('').reverse().join('');

console.log(reverseString())


const isCharacterAVowel = () => {if (letterInput == "a"||letterInput == "e"||letterInput == "i"||letterInput == "o"|| letterInput == "u")
        return letterInput + " is a vowel"
        else return letterInput + "is not a vowel."
    }

    console.log(isCharacterAVowel())


    function findLongestWord() {
        lwArray = stringInput.split(" ")
        longestWord = ""
        longestWord.length = 0

        for (let i=0;i < lwArray.length;i++){
            if (lwArray[i].length>longestWord.length){
                longestWord.length = lwArray[i].length
                longestWord = lwArray[i]
            }
        }
        return longestWord + " is the longest word"
    }


    console.log(findLongestWord())

    function filterLongWords() {
        lwArray2 = stringInput.split(" ")
        longWords = []

        for (let i = 0; i <lwArray2.length;i++){
            if (lwArray2[i].length>5){
                longWords.push(lwArray2[i])
            }
        }
        return longWords + " are the longest words in this string"
    }

    console.log(filterLongWords())