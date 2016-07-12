const Benchmark = require('benchmark');
console.log("\nString:");

// String concat
console.log("\n  Concat:");
new Benchmark.Suite()
	.add('    concat                ', function() {
		let pos = 'Hello World!'.concat('o');
	})
	.add('    +                     ', function() {
		let pos = 'Hello World!' + 'o';
	})
	// add listeners
	.on('cycle', function(event) {
		console.log(String(event.target));
	})
	.on('complete', function() {
		console.log('      Fastest => ' + this.filter('fastest').map('name'));
	})
	.run();

// String contains
console.log("\n  Substring:");
new Benchmark.Suite()
	.add('    substring             ', function() {
		let beg = 'Hello World!'.substring(0, 2);
		let mid = 'Hello World!'.substring(4, 6);
		let end = 'Hello World!'.substring(10);
	})
	.add('    subtr                 ', function() {
		let beg = 'Hello World!'.substr(0, 2);
		let mid = 'Hello World!'.substr(4, 2);
		let end = 'Hello World!'.substr(-2);
	})
	.add('    slice                 ', function() {
		let beg = 'Hello World!'.slice(0, 2);
		let mid = 'Hello World!'.slice(4, 6);
		let end = 'Hello World!'.slice(-2);
	})
	// add listeners
	.on('cycle', function(event) {
		console.log(String(event.target));
	})
	.on('complete', function() {
		console.log('      Fastest => ' + this.filter('fastest').map('name'));
	})
	.run();

// String contains
console.log("\n  Contains:");
new Benchmark.Suite()
	.add('    RegEx test            ', function() {
		let pos = /o/.test('Hello World!');
		let neg = /v/.test('Hello World!');
	})
	.add('    indexOf               ', function() {
		let pos = 'Hello World!'.indexOf('o') > -1;
		let neg = 'Hello World!'.indexOf('v') > -1;
	})
	.add('    includes              ', function() {
		let pos = 'Hello World!'.includes('o');
		let neg = 'Hello World!'.includes('v');
	})
	// add listeners
	.on('cycle', function(event) {
		console.log(String(event.target));
	})
	.on('complete', function() {
		console.log('      Fastest => ' + this.filter('fastest').map('name'));
	})
	.run();

console.log("\n  Starts with:");
// String starts with
new Benchmark.Suite()
    .add('    RegEx test            ', function() {
		let pos = /^H/.test('Hello World!');
		let neg = /^o/.test('Hello World!');
    })
    .add('    lastIndexOf           ', function() {
		let pos = 'Hello World!'.lastIndexOf('H', 0) === 0;
		let neg = 'Hello World!'.lastIndexOf('o', 0) === 0;
    })
    .add('    startsWith            ', function() {
        let pos = 'Hello World!'.startsWith('H');
		let neg = 'Hello World!'.startsWith('o');
    })
    // add listeners
    .on('cycle', function(event) {
        console.log(String(event.target));
    })
    .on('complete', function() {
        console.log('      Fastest => ' + this.filter('fastest').map('name'));
    })
    .run();

console.log("\n  Ends with:");
// String ends with
new Benchmark.Suite()
	.add('    RegEx test            ', function() {
		let pos = /H$/.test('Hello World!');
		let neg = /o$/.test('Hello World!');
	})
	.add('    slice                 ', function() {
		let pos = 'Hello World!'.slice(-1) === '!';
		let neg = 'Hello World!'.slice(-1) === 'o';
	})
	.add('    endsWith              ', function() {
		let pos = 'Hello World!'.endsWith('!');
		let neg = 'Hello World!'.endsWith('o');
	})
	// add listeners
	.on('cycle', function(event) {
		console.log(String(event.target));
	})
	.on('complete', function() {
		console.log('      Fastest => ' + this.filter('fastest').map('name'));
	})
	.run();
