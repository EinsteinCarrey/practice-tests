const countUniqueValues = array => {
    const uniqueElements = new Set(array);
    return uniqueElements.size
};

module.exports = countUniqueValues;
