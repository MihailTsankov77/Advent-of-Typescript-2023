/**
 * So, as a small token of our appreciation,
 * let's help the elves by implementing a type, DayCounter,
 * that they can use to keep track of how many days are remaining before Christmas.
 *
 * The first argument is the beginning of the count (inclusive),
 * and the second argument is the last number to count to (also inclusive).
 * It should return a union of numbers representing the remaining days.
 */
type DayCounter<
  Start extends number,
  End extends number,
  StartArr extends any[] = [],
  EndArr extends any[] = []
> = Start extends StartArr["length"]
  ? End extends EndArr["length"]
    ? EndArr["length"]
    : EndArr["length"] | DayCounter<Start, End, StartArr, [any, ...EndArr]>
  : DayCounter<Start, End, [any, ...StartArr], [any, ...StartArr]>;
