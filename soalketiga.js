function highestPalindrome(str, k) {
    function findPalindrome(s, left, right, changesLeft) {
        if (left > right) {
            return [s, changesLeft];
        }

        if (s[left] === s[right]) {
            return findPalindrome(s, left + 1, right - 1, changesLeft);
        }

        if (changesLeft > 0) {
            let option1 = s.slice(0, left) + s[right] + s.slice(left + 1);
            option1 = option1.slice(0, right) + s[right] + option1.slice(right + 1);
            let [pal1, rem1] = findPalindrome(option1, left + 1, right - 1, changesLeft - 1);

            let option2 = s.slice(0, right) + s[left] + s.slice(right + 1);
            option2 = option2.slice(0, left) + s[left] + option2.slice(left + 1);
            let [pal2, rem2] = findPalindrome(option2, left + 1, right - 1, changesLeft - 1);

            if (parseInt(pal1) > parseInt(pal2)) {
                return [pal1, rem1];
            } else {
                return [pal2, rem2];
            }
        }

        return [-1, changesLeft];
    }

    let [palindrome, remainingChanges] = findPalindrome(str, 0, str.length - 1, k);

    if (palindrome === -1) {
        return -1;
    }

    for (let i = 0; i < Math.floor(str.length / 2); i++) {
        if (remainingChanges <= 0) {
            break;
        }
        if (palindrome[i] !== '9') {
            palindrome = palindrome.slice(0, i) + '9' + palindrome.slice(i + 1);
            palindrome = palindrome.slice(0, palindrome.length - 1 - i) + '9' + palindrome.slice(palindrome.length - i);
            remainingChanges -= 2;
        }
    }

    if (str.length % 2 !== 0 && remainingChanges > 0) {
        let mid = Math.floor(str.length / 2);
        palindrome = palindrome.slice(0, mid) + '9' + palindrome.slice(mid + 1);
    }

    return palindrome;
}

console.log(highestPalindrome("4224", 2));
