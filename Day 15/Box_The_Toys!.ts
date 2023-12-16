/**
 * The BoxToys type takes two arguments:
 * the name of a toy
 * the number of of boxes we need for this toy
 * And the type will return a tuple containing that toy that number of times.
 * But there's one little thing.. We need to support the number of boxes being a union.
 * That means our resulting tuple can also be a union.
 */
type BoxToys<T, Numbers, Arr extends T[] = []> = Numbers extends never
  ? never
  : Arr["length"] extends Numbers
  ? Arr | BoxToys<T, Exclude<Numbers, Arr["length"]>, [T, ...Arr]>
  : BoxToys<T, Numbers, [T, ...Arr]>;
