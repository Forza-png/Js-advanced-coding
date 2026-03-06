<h2>Javascript Palindrome Checker</h2>
function palindrome(string) {
    // Good luck!
    var input = string.replace(/[^A-Z0-9]/ig,'').toLowerCase();
    // console.log(input);
    var reversedInput = input.split('').reverse().join('');
    // console.log(reversedInput);
    if (input === reversedInput) {
        document.write("<div>" + string + " is a palindrome</div>");
    } else {
        document.write("<div>" + string + " is not a palindrome</div>");
    }
}

// You can test your function with the following code:
palindrome("madam")