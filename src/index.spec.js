const { readFile } = require('node:fs').promises;
const { cwd } = require('node:process');
const { resolve } = require('node:path');


describe('fd2-homework-2', () => {

    beforeAll(async () => {
        const fileContent = await readFile(resolve(cwd(), './src/index.js'), { encoding: 'utf-8' });
        const runner = new Function(
            '',
            fileContent.replace(/function\s*calc/, 'globalThis.calc = calc;\n function calc'),
        );

        runner();
    });

    it('should return function', () => {
        const result = calc(1, 2);

        expect(typeof result).toBe('function');
    });

    it('should return function for wrong arguments', () => {
        const result = calc('1', true);

        expect(typeof result).toBe('function');
    });

    it('should perform add operation', () => {
        expect(calc(10, 5)('add')).toBe(15);
    });

    it('should not perform add operation for wrong arguments', () => {
        expect(calc('10', 5)('add')).toBeNull();
    });

    it('should perform subtract operation', () => {
        expect(calc(10, 5)('subtract')).toBe(5);
    });

    it('should not perform subtract operation for wrong arguments', () => {
        expect(calc('10', 5)('subtract')).toBeNull();
    });

    it('should perform multiply operation', () => {
        expect(calc(10, 5)('multiply')).toBe(50);
    });

    it('should not perform multiply operation for wrong arguments', () => {
        expect(calc('10', 5)('multiply')).toBeNull();
    });

    it('should perform divide operation', () => {
        expect(calc(10, 5)('divide')).toBe(2);
    });

    it('should not perform divide operation for wrong arguments', () => {
        expect(calc('10', 5)('divide')).toBeNull();
    });

    it('should return null for unknown operation', () => {
        expect(calc(10, 5)('Add')).toBeNull();
        expect(calc(10, 5)('ADD')).toBeNull();
        expect(calc(10, 5)('Subtract')).toBeNull();
        expect(calc(10, 5)('SUBTRACT')).toBeNull();
        expect(calc(10, 5)('Multiply')).toBeNull();
        expect(calc(10, 5)('MULTIPLY')).toBeNull();
        expect(calc(10, 5)('Divide')).toBeNull();
        expect(calc(10, 5)('DIVIDE')).toBeNull();
        expect(calc(10, 5)('unknown')).toBeNull();
    });

});
