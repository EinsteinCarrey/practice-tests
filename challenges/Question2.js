const rotateArray = (array, rotations = 1) => {
    const rotatedValues = array.splice(array.length - rotations);
    return rotatedValues.concat(array);
};

module.exports = rotateArray;
