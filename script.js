/********** shamsTIIDELAB PROGRAM  *********/
let maxNumber = 200;

for (let i = 1; i <= maxNumber; i++) {
	//checking if number is divisible by both 8 and 6
	if (i % 8 === 0 && i % 6 === 0) {
		console.log('shamsTIIDELab');

		// checking if number is divisible by 6 and not 8
	} else if (i % 6 === 0 && i % 8 !== 0) {
		console.log('Shams');

		// checking if number is divisible by 8 and not 6
	} else if (i % 8 === 0 && i % 6 !== 0) {
		console.log('TIIDELab');
	} else {
		console.log(i);
	}
}
