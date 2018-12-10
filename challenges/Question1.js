const calculateBinaryGap = int => {
    const binaryPresentation = int.toString(2);
    let array =  binaryPresentation.split('');
    let lastIndexOf1 = array.lastIndexOf('1');
    let binaryGap = 0;

    while (array.length > 0 && array.some(element => element === '1')) {
        let lastIndex = array.lastIndexOf('1');
        array = array.slice(0, lastIndex);

        if ((lastIndexOf1 - lastIndex) > binaryGap) {
            binaryGap = (lastIndexOf1 - lastIndex) -1;
            lastIndexOf1 = lastIndex;
        }
    }

    return binaryGap;
};

module.exports = calculateBinaryGap;
