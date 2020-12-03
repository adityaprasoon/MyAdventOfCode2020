function doSolution1(inputArray) {
    let inValidCount = 0;
    inputArray.forEach((entry) => {
        const regex = new RegExp(entry.character, "ig")
        const matchingArray = entry.password.match(regex);
        const matchingCount = matchingArray ? matchingArray.length : 0;

        if (matchingCount < entry.min || matchingCount > entry.max) {
            inValidCount++;
        }
    });
    console.log(inputArray.length - inValidCount);
}

function doSolution2(inputArray) {
    
}

module.exports = { doSolution1, doSolution2 };
