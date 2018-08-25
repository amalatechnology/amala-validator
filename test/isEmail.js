import { assert } from 'chai';
import V from '../src';
import { getExpected, compare } from './TestElements';

describe('isEmail() method:', () => {
	it('should pass standard email', () => {
		const email = 'contact@sakwa.io';
		const output = new V(email).isEmail().v();

		const expected = getExpected({
			extra: {
				emailDomain: 'sakwa.io'
			}
		}, email);

		assert(compare(output, expected));
	});

	it('should pass dotted email', () => {
		const email = 'just.example.contact@sakwa.io';
		const output = new V(email).isEmail().v();

		const expected = getExpected({
			extra: {
				emailDomain: 'sakwa.io'
			}
		}, email);

		assert(compare(output, expected));
	});

	it('should not pass simple string', () => {
		const email = 'someinvalidemail';
		const output = new V(email).isEmail().v();

		const expected = getExpected({
			valid: false,
			errors: {
				isEmail: 'Email is invalid'
			}
		}, email);

		assert(compare(output, expected));
	});

	it('should not pass string with @', () => {
		const email = 'someinvalid@email';
		const output = new V(email).isEmail().v();

		const expected = getExpected({
			valid: false,
			errors: {
				isEmail: 'Email is invalid'
			}
		}, email);

		assert(compare(output, expected));
	});
});
