const expect = require('chai').expect;
const CelToFar = require('../cel-to-far');
const celToFarInstance = new CelToFar();

describe('cel-to-f', () => {
	it('returns a number', () => {
		expect(celToFarInstance.toFar(20)).to.be.a('number');
	});

	it('converts cel to f', () => {
		expect(celToFarInstance.toFar(68)).to.equal(20);
	});
});
