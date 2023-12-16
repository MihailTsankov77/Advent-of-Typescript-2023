/**
 * So, for this year.. nothing fancy. We'll have to just write a StreetSuffixTester from scratch.
 *
 * This type will take two generic arguments.
 * The first is for the street, and the second is for the suffix we're testing against.
 *
 * If the street ends with the suffix then the type should return true (otherwise, false).
 */
type StreetSuffixTester<T, S> = T extends `${infer _} ${infer Rest}`
  ? StreetSuffixTester<Rest, S>
  : T extends S
  ? true
  : false;
