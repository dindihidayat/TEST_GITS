function weightedStrings(s, queries) {
    const weights = new Set();
    let currentWeight = 0;
    let prevChar = '';

    for (const char of s) {
        const weight = char.charCodeAt(0) - 'a'.charCodeAt(0) + 1;

        if (char === prevChar) {
            currentWeight += weight;
        } else {
            currentWeight = weight;
        }
        weights.add(currentWeight);
        prevChar = char;
    }

    return queries.map(q => weights.has(q) ? "Yes" : "No");
}

const s = "bbccc";
const queries = [2, 4, 3, 6, 9];
const result = weightedStrings(s, queries);
console.log(result)
