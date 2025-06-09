//mantap
//ini adalah perubahan
function isBalanced(str) {
    const stack = [];
    const bracketPairs = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
	
    for (const char of str) {

        if (bracketPairs.hasOwnProperty(char)) {
            stack.push(char);
        } else if (Object.values(bracketPairs).includes(char)) {
            const top = stack.pop();
            if (bracketPairs[top] !== char) {
                return "NO";
            }
        }
    }
akan ada error disini
    return stack.length === 0 ? "YES" : "NO";
}

//Cara Pemanggilan
const result = isBalanced("[{[{[{[]}]}]}")
console.log("Result : " + result)
