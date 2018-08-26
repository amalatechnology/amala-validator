/** Class validating and filtering the given value. */
class AmalaValidator {
	/**
    *	Create validator instance.
    *	@param {*} value - The value to be validated.
    */
	constructor(value) {
		this.output = {
			cleanValue: value,
			formattedValue: value,
			valid: true,
			errors: {},
			extra: {}
		}
	}

	set value(value) {
		this.setValue(value, value);
	}

	get value() {
		return this.output.cleanValue;
	}	

	/**
	*	Sets values for cleanValue and formattedValue.
	*	@param {*} cleanValue the filename
	*	@param {*} formattedValue the blob data
	*/
	setValue(cleanValue, formattedValue) {
		this.output.cleanValue = value;
		this.output.formattedValue = value;		
	}

	/**
	*	Returns validator class output.
	*	@return {object} the validator output object
	*/
	v() {
		return this.output;
	}

	/**
	*	Checks if number is equal or higher then given maximum.
	*	@param {number} number the maximum allowed number
	*	@return {AmalaValidator} AmalaValidator instance
	*/
	max(number) {
		const test = this.value <= number;

		if(!test) {
			this.output.valid = false;
			this.output.errors.max = `Maximum value is ${number}`;
		}
		
    	return this;
  	}

	/**
	*	Checks if number is equal or bigger then given minimum.
	*	@param {number} number the minimum allowed number
	*	@return {AmalaValidator} AmalaValidator instance
	*/
	min(number) {
		const test = this.value >= number;

		if(!test) {
			this.output.valid = false;
			this.output.errors.min = `Minimum value is ${number}`;
		}
		
    	return this;
	}

	/**
	*	Checks if string is an email and saves its domain.
	*	@return {AmalaValidator} AmalaValidator instance
	*/
	isEmail() {
		const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  		const test = regex.test(this.value);

		if(!test) {
			this.output.valid = false;
			this.output.errors.isEmail = 'Email is invalid';
		} else {
			this.output.extra.emailDomain = this.value.split('@')[1];
		}
		
    	return this;		
	}
}

export default AmalaValidator;