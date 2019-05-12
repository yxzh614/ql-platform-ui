module.exports = require('./src/index')

function a(number1, number2, operator) {
	if (operator === '+') {
		return number1 + number2
	}
	if (operator === '-') {
		return number1 - number2
	}
	if (operator === '*') {
		return number1 * number2
	}
	if (operator === '/') {
		return number1 / number2
	}
}