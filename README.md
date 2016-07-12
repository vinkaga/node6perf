# node6perf
Performance Comparison of Node 6.x.x Constructs

###Results
```
Node version: v6.2.2

String:

  Concat:
    concat                 x 36,261,749 ops/sec ±0.98% (84 runs sampled)
    +                      x 93,293,024 ops/sec ±1.02% (88 runs sampled)
      Fastest =>     +

  Substring:
    substring              x 14,370,859 ops/sec ±1.16% (86 runs sampled)
    subtr                  x 14,412,859 ops/sec ±3.39% (85 runs sampled)
    slice                  x 14,482,641 ops/sec ±1.16% (88 runs sampled)
      Fastest =>     slice

  Contains:
    RegEx test             x 6,184,511 ops/sec ±1.16% (85 runs sampled)
    indexOf                x 5,261,361 ops/sec ±1.61% (83 runs sampled)
    includes               x 5,352,238 ops/sec ±0.64% (87 runs sampled)
      Fastest =>     RegEx test

  Starts with:
    RegEx test             x 9,424,800 ops/sec ±3.99% (86 runs sampled)
    lastIndexOf            x 10,267,348 ops/sec ±4.81% (83 runs sampled)
    startsWith             x 8,887,308 ops/sec ±1.23% (85 runs sampled)
      Fastest =>     lastIndexOf

  Ends with:
    RegEx test             x 10,268,608 ops/sec ±2.26% (83 runs sampled)
    slice                  x 18,403,183 ops/sec ±1.12% (86 runs sampled)
    endsWith               x 17,091,808 ops/sec ±0.91% (85 runs sampled)
      Fastest =>     slice

Array:

  Loop:
    for                    x 534,679 ops/sec ±0.49% (88 runs sampled)
    for cached             x 644,101 ops/sec ±0.55% (88 runs sampled)
    for-of                 x 197,671 ops/sec ±0.64% (90 runs sampled)
    forEach                x 103,957 ops/sec ±0.72% (91 runs sampled)
    map                    x 44,960 ops/sec ±1.30% (90 runs sampled)
      Fastest =>     for cached
```