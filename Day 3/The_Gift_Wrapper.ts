/**
 * There's a GiftWrapper type to help keep the wrapping process organized, but it needs something...
 * it needs some way to be parameterized.
 * What we have so far is nice as a generic (*wink wink*) starting point...
 * but it needs some way to provide specific values for Present, From, and To at the type layer..
 */
type GiftWrapper<P, F, T> = {
  present: P;
  from: F;
  to: T;
};
