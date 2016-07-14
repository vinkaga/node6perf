const Benchmark = require('benchmark');
console.log("\nMap:");

console.log("\n  Vs Object:");
new Benchmark.Suite()
	.add('    map                   ', function() {
		let map = new Map([['key1', 'val1']]);
		map.set('key2', 'val2');
		map.set('key3', 'val3');
		map.delete('key2');
		let count = 0;
		let keys = map.keys();
		for (let key of keys) {
			++count;
		}
	})
	.add('    object                ', function() {
		let obj = {'key1': 'val1'};
		obj.key2 = 'val2';
		obj.key3 = 'val3';
		delete obj.key2;
		let count = 0;
		let keys = Object.keys(obj);
		for (let key of keys) {
			++count;
		}
	})
	// add listeners
	.on('cycle', function(event) {
		console.log(String(event.target));
	})
	.on('complete', function() {
		console.log('      Fastest => ' + this.filter('fastest').map('name'));
	})
	.run();

let map = new Map([['k1', 1], ['k2', 2], ['k3', 3], ['k4', 4], ['k5', 5], ['k6', 6]]);
console.log("\n  Loop:");
new Benchmark.Suite()
	.add('    for-of                ', function() {
		let total = 0;
		let entries = map.values();
		for (var value of entries) {
			total += value;
		}
	})
	.add('    forEach               ', function() {
		let total = 0;
		map.forEach(function(value, key) {
			total += value;
		}, map);
	})
	// add listeners
	.on('cycle', function(event) {
		console.log(String(event.target));
	})
	.on('complete', function() {
		console.log('      Fastest => ' + this.filter('fastest').map('name'));
	})
	.run();
