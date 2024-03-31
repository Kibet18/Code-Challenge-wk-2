
// solving using for loop to interate between the two intergers and push them into array
function createArray(start, end) {
	let result = [];
	for (let i = start; i <= end; i++) {
		result.push(i);
	}
	return result;
}
// let result = createArray(4, 7);

console.log(createArray(4,7));
console.log(createArray(-4,7));