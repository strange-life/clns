# clns

A utility for constructing className strings conditionally, made for fun and for my own use.

```typescript
import { clns } from "@madahapa/clns";
// import clns from "@madahapa/clns";

clns("foo", true && "bar", false && "baz"); // "foo bar"
clns("bar", { foo: true, bar: false, baz: true }); // "bar foo baz"
```
