/**
 * The first parameter of FilterChildrenBy is just a union of all the children's naughty/nice status.
 * The second parameter is the thing we want to exclude from the final resulting type.
 *
 * Note: the engineering team manager triple checked with Santa
 * because this seems like a strange way to keep track of naughty and nice children,
 * but Santa ensured the manager that this is exactly what he wants.
 */
type FilterChildrenBy<T, ToExclude> = T extends ToExclude ? never : T;
