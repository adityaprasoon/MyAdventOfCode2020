const fs = require('fs');
const readline = require('readline');
const solution = require('./solution');

const path = "./d1p1_input.txt";
const inputArray = [];

const file = readline.createInterface({
    input: fs.createReadStream(path),
    output: process.stdout,
    terminal: false
});

file.on('line', (line) => {
    inputArray.push(Number(line));
});

file.on("close", () => {
    solution.doSolution1(inputArray);
    solution.doSolution2(inputArray);
})



