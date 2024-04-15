const addTwo = require('./opgave_1/test1');
const findprocent = require('./opgave_1/test2');
const Pawn = require('./opgave_1/test3');


test('added two numbers', () =>{
    expect(addTwo(1,2)).toBe(3);
})

test('find procent', () =>{
    expect(findprocent(100,50)).toBe(50);
})

test('valdere brik', () =>{
    let pawnbrick = new Pawn(0, [2, 0]);
    expect(pawnbrick._validateSpot([2,-2])).toBe(true);
})