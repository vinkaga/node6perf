# node6perf
Performance Comparison of Node 6.x.x Constructs

###Results
```
Node version: v6.2.2

String:

  Concat:
    concat                 x 34,118,572 ops/sec ±2.64% (80 runs sampled)
    +                      x 84,152,094 ops/sec ±1.71% (78 runs sampled)
      Fastest =>     +

  Substring:
    substring              x 13,723,479 ops/sec ±2.08% (82 runs sampled)
    subtr                  x 14,015,309 ops/sec ±2.26% (85 runs sampled)
    slice                  x 14,615,804 ops/sec ±2.14% (86 runs sampled)
      Fastest =>     slice

  Contains:
    RegEx test             x 5,487,319 ops/sec ±2.67% (77 runs sampled)
    indexOf                x 4,837,610 ops/sec ±2.40% (81 runs sampled)
    includes               x 5,042,108 ops/sec ±2.57% (80 runs sampled)
      Fastest =>     RegEx test

  Starts with:
    RegEx test             x 10,867,990 ops/sec ±0.86% (90 runs sampled)
    lastIndexOf            x 11,185,928 ops/sec ±0.80% (87 runs sampled)
    startsWith             x 9,004,320 ops/sec ±0.80% (87 runs sampled)
      Fastest =>     lastIndexOf

  Ends with:
    RegEx test             x 11,071,541 ops/sec ±0.83% (89 runs sampled)
    slice                  x 19,027,452 ops/sec ±0.76% (84 runs sampled)
    endsWith               x 16,491,723 ops/sec ±1.73% (85 runs sampled)
      Fastest =>     slice

Array:

  Loop:
    for                    x 514,988 ops/sec ±2.24% (86 runs sampled)
    for cached             x 623,977 ops/sec ±1.88% (88 runs sampled)
    for-of                 x 145,917 ops/sec ±3.06% (74 runs sampled)
    forEach                x 81,721 ops/sec ±4.44% (69 runs sampled)
    map                    x 35,840 ops/sec ±3.79% (73 runs sampled)
      Fastest =>     for cached

Map:

  Vs Object:
    map                    x 1,303,810 ops/sec ±3.89% (72 runs sampled)
    object                 x 341,129 ops/sec ±3.70% (77 runs sampled)
      Fastest =>     map

  Loop:
    for-of                 x 1,753,363 ops/sec ±3.04% (73 runs sampled)
    forEach                x 1,754,982 ops/sec ±3.47% (73 runs sampled)
      Fastest =>     for-of                ,    forEach

Function:

  Named vs Arrow:
    named                  x 24,632,812 ops/sec ±4.88% (71 runs sampled)
    arrow block            x 27,522,932 ops/sec ±2.26% (80 runs sampled)
    arrow exp              x 27,754,587 ops/sec ±3.36% (78 runs sampled)
      Fastest =>     arrow block           ,    arrow exp
```