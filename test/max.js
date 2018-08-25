import { assert } from 'chai';
import V from '../src';
import { getExpected, compare } from './TestElements';

describe('max() method:', () => {
	it('should pass smaller number', () => {
		const number = 7;
		const output = new V(number).max(20).v();

		const expected = getExpected(null, number);

		assert(compare(output, expected));
	});

	it('should pass smaller float number', () => {
		const number = 19.889318923949;
		const output = new V(number).max(20).v();

		const expected = getExpected(null, number);

		assert(compare(output, expected));
	});

	it('should pass max number', () => {
		const number = 20;
		const output = new V(number).max(20).v();

		const expected = getExpected(null, number);

		assert(compare(output, expected));
	});

	it('should not pass bigger number', () => {
		const number = 25;
		const output = new V(number).max(20).v();

		const expected = getExpected({
			valid: false,
			errors: {
				max: 'Maximum value is 20'
			}
		}, number);

		assert(compare(output, expected));
	});

	it('should not pass bigger float number', () => {
		const number = 56.11;
		const output = new V(number).max(20).v();

		const expected = getExpected({
			valid: false,
			errors: {
				max: 'Maximum value is 20'
			}
		}, number);

		assert(compare(output, expected));
	});
});