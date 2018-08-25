import { assert } from 'chai';
import V from '../src';
import { getExpected, compare } from './TestElements';

describe('min() method:', () => {
	it('should not pass smaller number', () => {
		const number = 7;
		const output = new V(number).min(20).v();

		const expected = getExpected({
			valid: false,
			errors: {
				min: 'Minimum value is 20'
			}
		}, number);

		assert(compare(output, expected));
	});

	it('should not pass smaller float number', () => {
		const number = 19.99999999999999;
		const output = new V(number).min(20).v();

		const expected = getExpected({
			valid: false,
			errors: {
				min: 'Minimum value is 20'
			}
		}, number);

		assert(compare(output, expected));
	});

	it('should pass min number', () => {
		const number = 20;
		const output = new V(number).min(20).v();

		const expected = getExpected(null, number);

		assert(compare(output, expected));
	});

	it('should pass bigger number', () => {
		const number = 28;
		const output = new V(number).min(20).v();

		const expected = getExpected(null, number);

		assert(compare(output, expected));
	});

	it('should pass bigger float number', () => {
		const number = 56.11;
		const output = new V(number).min(20).v();
		
		const expected = getExpected(null, number);

		assert(compare(output, expected));
	});
});
