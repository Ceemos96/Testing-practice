const stringLength = require ("./string");
const reverse = require ("./reverse");

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