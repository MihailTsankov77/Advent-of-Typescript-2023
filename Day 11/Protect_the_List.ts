/**
 * SantaListProtector takes in an arbitrary type as an input and modifies that type to be readonly.
 * The trick here is that it must also work for any nested objects.
 */
type SantaListProtector<T> = {
  readonly [Key in keyof T]: T[Key] extends Function
    ? T[Key]
    : SantaListProtector<T[Key]>;
};
