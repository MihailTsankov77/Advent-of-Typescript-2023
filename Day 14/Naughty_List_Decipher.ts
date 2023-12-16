/**
 * Looks like we're gonna need to pick up the slack for Santa yet again.
 * He's got a list like "melkey/prime/theo/trash" and we need to turn it into a union of strings "melkey" | "prime" | "theo" | "trash".
 * Let's get this done before the rest of the elves find out.
 */
type DecipherNaughtyList<T> = T extends `${infer Name}/${infer Rest}`
  ? Name | DecipherNaughtyList<Rest>
  : T;
