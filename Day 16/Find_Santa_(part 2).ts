/**
 * The FindSanta takes only one argument, the forest (an array of arrays),
 * and returns the [Row, Column] indices where Santa is located.
 * Then an elf search team can be deployed to retrieve him.
 * */
export type FindSanta<
  Arr extends any[][],
  Row extends any[] = [],
  Cell extends any[] = []
> = Arr[Row["length"]][Cell["length"]] extends "🎅🏼"
  ? [Row["length"], Cell["length"]]
  : Arr[Row["length"]][Cell["length"]] extends undefined
  ? Arr[Row["length"]] extends undefined
    ? never
    : FindSanta<Arr, [any, ...Row], []>
  : FindSanta<Arr, Row, [any, ...Cell]>;
