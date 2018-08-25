class V {
	constructor(value) {
		this.output = {
			cleanValue: value,
			formattedValue: value,
			valid: true,
			errors: {},
			extra: {}
		}
	}

	setValue(cleanValue, formattedValue) {
		this.output.cleanValue = value;
		this.output.formattedValue = value;		
	}

	set value(value) {
		this.setValue(value, value);
	}

	get value() {
		return this.output.cleanValue;
	}

	v() {
		return this.output;
	}

	max(number) {
		const test = this.value <= number;

		if(!test) {
			this.output.valid = false;
			this.output.errors.max = `Maximum value is ${number}`;
		}
		
    	return this;
  	}
  
	min(number) {
		const test = this.value >= number;

		if(!test) {
			this.output.valid = false;
			this.output.errors.min = `Minimum value is ${number}`;
		}
		
    	return this;
	}

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

export default V;