function CelToFar() {}

CelToFar.prototype.toFar = function(cel) {
	let far =  cel * 9 / 5 + 32;

	return far;
};

CelToFar.prototype.toCel = function(far) {
	let cel = ((far - 32) * 5) / 9;

	return cel;
};

module.exports = CelToFar;
