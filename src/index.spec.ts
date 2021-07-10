import { describe } from 'mocha';
import { expect } from 'chai';
import { addNumbers } from './index';

describe('#Test addNumbers logic', () => {
	it('Test positive numbers', () => {
		// Prepare test parameters
		const a = 1;
		const b = 2;
		const c = a + b;
		// Call to the API
		const addResults = addNumbers(a, b);
		// Make sure the results is as expected
		expect(addResults).to.be.equal(c, `"${a}" + "${b}" should be "${c}" but "addNumbers" returns "${addResults}"`);
	});

	it('Test negative numbers', () => {
		// Prepare test parameters
		const a = -1;
		const b = -2;
		const c = a + b;
		// Call to the API
		const addResults = addNumbers(a, b);
		// Make sure the results is as expected
		expect(addResults).to.be.equal(c, `"${a}" + "${b}" should be "${c}" but "addNumbers" returns "${addResults}"`);
	});
});
