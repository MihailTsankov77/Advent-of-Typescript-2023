/**
 * Revere a string
 */
type Reverse<
  T extends string,
  Ans extends string = ""
> = T extends `${infer First}${infer Rest}`
  ? Reverse<Rest, `${First}${Ans}`>
  : Ans;
