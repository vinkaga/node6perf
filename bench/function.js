const Benchmark = require('benchmark');
console.log("\nFunction:");

console.log("\n  Named vs Arrow:");
new Benchmark.Suite()
	.add('    named                 ', function() {
		(function(p) {
			return p*p;
		})(5);
	})
	.add('    arrow block           ', function() {
		((p) => {
			return p*p;
		})(5);
	})
	.add('    arrow exp             ', function() {
		((p) => (p*p))(5);
	})
	// add listeners
	.on('cycle', function(event) {
		console.log(String(event.target));
	})
	.on('complete', function() {
		console.log('      Fastest => ' + this.filter('fastest').map('name'));
	})
	.run();
