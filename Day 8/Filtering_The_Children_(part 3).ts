/**
 * 1. there are sometimes naughty kids in the same list
 * 2. turns out I don't actually need to see the nice children in the list, after all
 * 3. my golf game ran late this morning.. so since the other two changes were quick to implement,
 * I'm sure this will be just as fast, right?!
 */
type RemoveNaughtyChildren<T> = {
  [Key in keyof T as Key extends `naughty_${infer _}` ? never : Key]: T[Key];
};
