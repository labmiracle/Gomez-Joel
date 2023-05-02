function isValidValue(n) {
	return n > 0 && Number.isInteger(n);
}

function calculateGrowingDays(
	speedGrowth,
	decreasingSpeed,
	desiredHeight
) {
	if (
		!isValidValue(speedGrowth) ||
		!isValidValue(decreasingSpeed) ||
		!isValidValue(desiredHeight)
	)
		return "Only positive integer values";

	if (decreasingSpeed > speedGrowth)
		return "velocidadDecrecimiento can't be greater than velocidadCrecimiento";

	const totalDays = Math.ceil(
		desiredHeight / (speedGrowth - decreasingSpeed)
	);

	return totalDays;
  }

console.log(calculateGrowingDays(50,40,700))