/**
 * Today's task is to craft a type (PresentDeliveryList) that takes an object type as an input
 * and then replaces the values at each property with an Address.
 * We don't know in advance what properties will be provided,
 * which is why it needs to be a generic type.
 * Otherwise Bernard would probably just copy/pasta it to get through the day.
 */
type Address = { address: string; city: string };
type PresentDeliveryList<T> = {
  [Key in keyof T]: Address;
};
