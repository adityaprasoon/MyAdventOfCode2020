function doSolution1(inputArray) {

    outer: for (let i = 0; i < inputArray.length; i++) {
        for (let j = i; j < inputArray.length; j++) {
            if (inputArray[i] + inputArray[j] == 2020) {
                console.log(inputArray[i]);
                console.log(inputArray[j]);
                console.log(inputArray[i] * inputArray[j])
                break outer;
            }
        }
    }
}

function doSolution2(inputArray) {

    outer: for (let i = 0; i < inputArray.length; i++) {
        for (let j = i; j < inputArray.length; j++) {
            for (let k = j; k < inputArray.length; k++) {
                if (inputArray[i] + inputArray[j] + inputArray[k] == 2020) {
                    console.log(inputArray[i]);
                    console.log(inputArray[j]);
                    console.log(inputArray[k]);
                    console.log(inputArray[i] * inputArray[j] * inputArray[k])
                    break outer;
                }
            }
        }
    }
}

module.exports = {doSolution1, doSolution2};
