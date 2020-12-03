const fs = require('fs');
const readline = require('readline');
const solution = require('./solution');

const path = "./input.txt";
const inputArray = [];

const file = readline.createInterface({
    input: fs.createReadStream(path),
    output: process.stdout,
    terminal: false
});

file.on('line', (line) => {
    let parts = line.split(" ");
    let obj = {
        min: parts[0].split("-")[0],
        max: parts[0].split("-")[1],
        character: parts[1].charAt(0),
        password: parts[2]
    };

    inputArray.push(obj);
});

file.on("close", () => {
    solution.doSolution1(inputArray);
    //solution.doSolution2(inputArray);
})
