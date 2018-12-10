import calculateBinaryGap from './Question1';
import rotateArray from './Question2';
import validateStringNesting from './Question3';
import countUniqueValues from './Question4';


test('calculateBinaryGap', () => {
    const result1 = calculateBinaryGap(9);
    const result2 = calculateBinaryGap(529);
    const result3 = calculateBinaryGap(20);
    const result4 = calculateBinaryGap(15);

    const expected1 = 2;
    const expected2 = 4;
    const expected3 = 1;
    const expected4 = 0;

    expect(result1).toEqual(expected1);
    expect(result2).toEqual(expected2);
    expect(result3).toEqual(expected3);
    expect(result4).toEqual(expected4);
});


test('rotateArray', () => {
    const result1 = rotateArray([1, 2], 1);
    const result2 = rotateArray([1, 2, 3, 4, 5], 2);
    const result3 = rotateArray([3, 8, 9, 7, 6], 3);

    const expected1 = [2, 1];
    const expected2 = [4, 5, 1, 2, 3];
    const expected3 = [9, 7, 6, 3, 8];

    expect(result1).toEqual(expected1);
    expect(result2).toEqual(expected2);
    expect(result3).toEqual(expected3);
});



test('validateStringNesting', () => {
    const result1 = validateStringNesting("{[()()]}");
    const result2 = validateStringNesting("([)()]" );

    const expected1 = 1;
    const expected2 = 0;

    expect(result1).toEqual(expected1);
    expect(result2).toEqual(expected2);
});


test('countUniqueValues', () => {
    const result = countUniqueValues([-1,2,3,4,5]);
    const result1 = countUniqueValues([1,-2,3,3,3,4]);
    const result2 = countUniqueValues([1,1,1,2,2,2,2,3,3,3,3,-4]);

    const expected = 5;
    const expected1 = 4;
    const expected2 = 4;

    expect(result).toEqual(expected);
    expect(result1).toEqual(expected1);
    expect(result2).toEqual(expected2);
});
