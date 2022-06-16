const stringLength = (string) => {
    if(string.length < 1 || string.length > 10 ){
        throw new Error('The string length cannot be more than 10 or less than 1')
    }else{
        return string.length;
    }  
};

module.exports = stringLength;