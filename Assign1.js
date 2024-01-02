function printShortestSubstrings(s, x) {
    const occurrences = new Map(); // Map to store the last occurrence index of each character
    let result = []; // Array to store the final substrings

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (occurrences.has(char)) {
            // Check if the substring length is greater than or equal to x
            const length = i - occurrences.get(char) + 1;
            if (length >= x) {
                const substring = s.substring(occurrences.get(char), i + 1);
                // If the result array is empty or the length is smaller than the current shortest length
                if (result.length === 0 || length < result[0].length) {
                    result = [substring];
                }
                // If the length is equal to the current shortest length
                else if (length === result[0].length) {
                    result.push(substring);
                }
            }
        }

        // Update the last occurrence index of the character
        occurrences.set(char, i);
    }

    if (result.length > 0) {
        result.forEach(substring => console.log(substring));
    } else {
        console.log("not-found");
    }
}

// Example usage
const s = "abccdbacca";

let x = 3;
console.log("x =", x);
printShortestSubstrings(s, x);

x = 4;
console.log("\nx =", x);
printShortestSubstrings(s, x);

x = 5;
console.log("\nx =", x);
printShortestSubstrings(s, x);

x = 6;
console.log("\nx =", x);
printShortestSubstrings(s, x);

x = 7;
console.log("\nx =", x);
printShortestSubstrings(s, x);

x = 8;
console.log("\nx =", x);
printShortestSubstrings(s, x);
