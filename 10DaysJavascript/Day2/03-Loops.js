'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
  let newString = '';
  for (const value of s) {
    if (/[aeiou]/.test(value)) newString += value;
  }
  for (const value of s) {
    if (/[^aeiou]/.test(value)) newString += value;
  }
  for (const i of newString) {
    console.log(i)
  }
}


function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}
