const stringLength = require ("./string");

test('length of the passed string', () => {
    expect(stringLength('microverse')).toBe(10);
});

test('less than 1 or greater than 10', () => {
    expect(() => stringLength('caterpillars')).toThrow(Error);
    expect(() => stringLength('')).toThrow(Error);
});
