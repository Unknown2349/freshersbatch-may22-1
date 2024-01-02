function modifyString(s) {
    const charArray = s.split('');
    const asciiValues = charArray.map(char => char.charCodeAt(0));
  

    let changedIndices = new Set();

    for (let i = 0; i < asciiValues.length; i++) {
        const currentAscii = asciiValues[i];
        

        if (currentAscii % 2 === 0) {
            const incrementValue = currentAscii % 7;

            if (i + 1 < asciiValues.length && !changedIndices.has(i + 1)) {
                asciiValues[i + 1] += incrementValue;
// Handle invalid ASCII value
                if (asciiValues[i + 1] < 32 || asciiValues[i + 1] > 126) {
                    asciiValues[i + 1] = 83;
                }

                changedIndices.add(i + 1);
                
            }
        } else {
            if (i - 1 >= 0 && !changedIndices.has(i - 1)) {
                const decrementValue = currentAscii % 5;

                asciiValues[i - 1] -= decrementValue;
// Handle invalid ASCII value
                if (asciiValues[i - 1] < 32 || asciiValues[i - 1] > 126) {
                    asciiValues[i - 1] = 83;
                }

                changedIndices.add(i - 1);
            }
        }

       
    }

    console.log("Final Modified ASCII Values:", asciiValues);

    const modifiedChars = asciiValues.map(ascii => String.fromCharCode(ascii));
    return modifiedChars.join('');
}
// Example with provided input
const inputString = "sHQen}";
const modifiedString = modifyString(inputString);
console.log("Final Answer:", modifiedString);
