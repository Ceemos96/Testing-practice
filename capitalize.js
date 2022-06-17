const capitalize = (string) => {
    string = string.split("");
    string[0] = string[0].toUpperCase();
    return string.join("");
}

module.exports = capitalize;