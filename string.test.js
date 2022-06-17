const stringLength = require ("./string");
const reverse = require ("./reverse");
const Calculator = require("./calculator");
const capitalize = require("./capitalize");

test('length of the passed string', () => {
    expect(stringLength('microverse')).toBe(10);
});

test('less than 1 or greater than 10', () => {
    expect(() => stringLength('caterpillars')).toThrow(Error);
    expect(() => stringLength('')).toThrow(Error);
});

test('reversed string value', () => {
    expect(reverse('microverse')).toBe('esrevorcim');
});

describe('calculator function', () => {
const result = new Calculator(8, 4);

    describe('add method', () => {
        test('addition test', () =>{
            expect(result.add()).toBe(12);
        })
        test('result greater than a & b', () =>{
            expect(result.add()).toBeGreaterThan( result.a && result.b );
        })
        test('type check', () =>{
            expect(typeof(result)).toBe("object");
        })
    
    })

    describe('subtract method', () => {
        test('subtraction test', () =>{
            expect(result.subtract()).toBe(4);
        })
        test('result less than a', () =>{
            expect(result.subtract()).toBeLessThan( result.a );
        })
        test('type check', () =>{
            expect(typeof(result.a && result.b)).toBe("number");
        })
    
    })

    describe('divide method', () => {
        test('division test', () =>{
            expect(result.divide()).toBe(2);
        })
        test('result less than a & b', () =>{
            expect(result.divide()).toBeLessThan( result.a && result.b );
        })
    })

    describe('multiply method', () => {
        test('multiplication test', () =>{
            expect(result.multiply()).toBe(32);
        })
        test('result greater than a & b', () =>{
            expect(result.multiply()).toBeGreaterThan( result.a && result.b );
        })
    })
});

describe('capitalize string', () => {
    test('input must be a string', () => {
        expect(capitalize(typeof('string'))).toBe('String')
    })
    test('capitalize input', () => {
        expect(capitalize('testing')).toBe('Testing');
    })

});

