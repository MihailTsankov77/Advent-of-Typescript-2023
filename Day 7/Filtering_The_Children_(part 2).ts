/**
 * Start by identifying the inputs for our AppendGood type.
 * Ask yourself if there should be any generic type constraints on the inputs
 * (there may not need to be, or at least right away).
 * Then try to set up a scaffold that will at least return the same values for each property.
 * Your next step is to transform the properties somehow..
 */
type AppendGood<T> = {
  [Key in keyof T as Key extends string ? `good_${Key}` : never]: T[Key];
};
