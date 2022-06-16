const reverse = (string) => {
 let reversedString = string.split('').reverse().join('');
 return reversedString;
};

module.exports = reverse;