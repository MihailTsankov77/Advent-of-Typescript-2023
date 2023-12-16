/**
 * FindSanta is a type that takes a tuple as its only argument and returns the index where Santa is located.
 * Let's help Santa get back to the thing he's best at: inspiring leadership.
 * note: never is returned if Santa cannot be found among the trees
 */
type FindSanta<
  T extends any[],
  Counter extends any[] = []
> = T[Counter["length"]] extends "🎅🏼"
  ? Counter["length"]
  : T[Counter["length"]] extends undefined
  ? never
  : FindSanta<T, [any, ...Counter]>;
