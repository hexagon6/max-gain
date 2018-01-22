const data = [9,8,7,6,5,6,8,10,11,7,6,5,4,1,2,3,4,6,5,4,5,10,13]

const init = {
	gMin: 1000,
	gMax: 0,
	prev: 9,
	maxGain: 0,
	curGain: 0, // necessary?
	curMin: 1000,
	prevMin: 999,
}

const maxGain = arr => arr.reduce((acc, curr) => {
	if(acc.gMin < acc.curMin) { acc.prevMin = curr }
	if(curr > acc.prev) {
		if(acc.prev < acc.gMin) {
			acc.gMin = acc.prev
		}
		acc.curGain = curr - acc.gMin
	}
	acc.prev = curr
	console.log(acc)

	return acc
}, init)

const main = (input) => maxGain(input)

console.log(main(data))
