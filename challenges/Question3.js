const validateStringNesting = string => {
    if( string.length % 2 !== 0 ) return 0;

    const openingElements = ['(', '{', '['];
    const closingElements = [')', '}', ']'];
    const openElements = [];

    const unclosedElements = string.split('').find( char => {
        if (openingElements.indexOf(char) > -1 ) {
            openElements.push(char);
        } else {
            const lastOpenElement = openElements[openElements.length -1];
            openElements.pop();
            return char !== closingElements[openingElements.indexOf(lastOpenElement)]
        }
    });

    return unclosedElements ? 0 : 1;
};

module.exports = validateStringNesting;
