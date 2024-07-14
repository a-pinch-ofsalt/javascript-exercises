

const palindromes = function (str) {
    const noPunct = removePunctuation(str.toLowerCase());
    const alphanumeric = noPunct.replace(/\s/g, '');
    const reversed = Array.from(alphanumeric).reverse().join('');
    return alphanumeric === reversed;
};

function removePunctuation(text) {
    var punctuation = /[\.,?!]/g;
    var newText = text.replace(punctuation, "");
    return newText;
  }

// Do not edit below this line
module.exports = palindromes;
