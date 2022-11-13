import { calculateLength } from './challenge.js';

const array = [Infinity, 'hola', null, [1, 3], NaN];

describe('Given calculateLength function', () => {
    test.each(array)(
        'When arguments are Infinity, hola, null, [1, 3], NaN',
        () => {
            const expected = 5;
            const result = calculateLength(array);
            expect(result).toBe(expected);
        }
    );
});

describe('Given calculateLenght function', () => {
    test('When argument is undefined lanza un error "Parámetro no incluido"', () => {
        const value = undefined;
        const expected = RangeError;
        expect(() => {
            calculateLength(value);
        }).toThrowError(expected);
    });
});
