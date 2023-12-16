/**
 * Let's implement SantasList such that it can be passed the types for the badList and goodList
 * and it will return a TypeScript tuple with the values of both lists combined.
 */
type SantasList<B extends readonly any[], G extends readonly any[]> = [
  ...B,
  ...G
];
