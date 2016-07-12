const Benchmark = require('benchmark');
console.log("\nArray:");

const arr = [...(new Array(100)).keys()];

console.log("\n  Loop:");
new Benchmark.Suite()
	.add('    for                   ', function() {
		let total = 0;
		for (let i = 0; i < arr.length; i++) {
			total += arr[i];
		}
	})
	.add('    for cached            ', function() {
		let total = 0;
		for (let i = 0, il = arr.length; i < il; i++) {
			total += arr[i];
		}
	})
	.add('    for-of                ', function() {
		let total = 0;
		for (let e of arr) {
			total += e;
		}
	})
	.add('    forEach               ', function() {
		let total = 0;
		arr.forEach((e, i) => {total += e;});
	})
	.add('    map                   ', function() {
		let total = 0;
		arr.map((e, i) => {total += e;});
	})
	// add listeners
	.on('cycle', function(event) {
		console.log(String(event.target));
	})
	.on('complete', function() {
		console.log('      Fastest => ' + this.filter('fastest').map('name'));
	})
	.run();
