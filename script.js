let maxNumber = 200;

for (let i = 1; i <= maxNumber; i++) {
	if (i % 6 === 0 && i % 8 !== 0) {
		console.log('Shams');
	} else if (i % 8 === 0 && i % 6 !== 0) {
		console.log('TIIDELab');
	} else if (i % 8 === 0 && i % 6 === 0) {
		console.log('shamsTIIDELab');
	} else {
		console.log(i);
	}
}
