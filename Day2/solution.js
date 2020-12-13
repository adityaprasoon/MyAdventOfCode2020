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
    let validCount = 0;
    console.log(inputArray)
    inputArray.forEach((entry) => {
        let charCount = 0;
        if (entry.password.charAt(entry.min - 1) == entry.character) {
            charCount++;
        }
        if (entry.password.charAt(entry.max - 1) == entry.character) {
            charCount++;
        }

        if (charCount == 1) {
            validCount++;
        }
    });
    console.log(validCount);
}

module.exports = {doSolution1, doSolution2};
