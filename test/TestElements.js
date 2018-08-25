export const getExpected = (expected = {}, value = '') => Object.assign({
	cleanValue: value,
	formattedValue: value,
	valid: true,
	errors: {},
	extra: {}
}, expected);

export const compare = (a, b) => JSON.stringify(a) === JSON.stringify(b);
