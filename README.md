# node6perf
Performance Comparison of Node 6.x.x Constructs

###To Run

```
npm start
```

###Results
```
Node version: v6.3.0

String:

  Concat:
    concat                 x 36,291,031 ops/sec ±0.80% (88 runs sampled)
    +                      x 91,821,603 ops/sec ±0.87% (86 runs sampled)
      Fastest =>     +

  Substring:
    substring              x 14,121,044 ops/sec ±1.17% (88 runs sampled)
    subtr                  x 14,752,228 ops/sec ±0.94% (85 runs sampled)
    slice                  x 14,915,796 ops/sec ±0.88% (86 runs sampled)
      Fastest =>     slice

  Contains:
    RegEx test             x 6,376,247 ops/sec ±0.97% (86 runs sampled)
    indexOf                x 5,642,369 ops/sec ±0.81% (86 runs sampled)
    includes               x 5,573,030 ops/sec ±0.83% (87 runs sampled)
      Fastest =>     RegEx test

  Starts with:
    RegEx test             x 10,592,422 ops/sec ±0.93% (87 runs sampled)
    lastIndexOf            x 10,669,911 ops/sec ±0.83% (84 runs sampled)
    startsWith             x 9,067,981 ops/sec ±1.28% (88 runs sampled)
      Fastest =>     lastIndexOf           ,    RegEx test

  Ends with:
    RegEx test             x 10,873,612 ops/sec ±1.01% (88 runs sampled)
    slice                  x 18,845,044 ops/sec ±0.86% (89 runs sampled)
    endsWith               x 17,080,981 ops/sec ±0.83% (89 runs sampled)
      Fastest =>     slice

Array:

  Loop:
    for                    x 530,228 ops/sec ±0.87% (86 runs sampled)
    for cached             x 637,300 ops/sec ±0.94% (88 runs sampled)
    for-of                 x 172,016 ops/sec ±3.21% (82 runs sampled)
    forEach                x 88,802 ops/sec ±0.98% (88 runs sampled)
    map                    x 39,642 ops/sec ±1.12% (88 runs sampled)
      Fastest =>     for cached

Map:

  Vs Object:
    map                    x 1,498,096 ops/sec ±1.08% (84 runs sampled)
    object                 x 349,139 ops/sec ±0.95% (86 runs sampled)
      Fastest =>     map

  Loop:
    for-of                 x 2,386,402 ops/sec ±0.95% (89 runs sampled)
    forEach                x 2,439,007 ops/sec ±1.02% (85 runs sampled)
      Fastest =>     forEach

Function:

  Named vs Arrow:
    named                  x 32,753,063 ops/sec ±0.93% (85 runs sampled)
    arrow block            x 33,040,414 ops/sec ±0.90% (84 runs sampled)
    arrow exp              x 33,138,188 ops/sec ±0.95% (88 runs sampled)
      Fastest =>     arrow exp             ,    arrow block
```
