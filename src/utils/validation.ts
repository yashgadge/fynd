export function validate(name: string, count: number) {
  return {
    name: name.trim() ? '' : 'Enter a customer name.',
    cart: count ? '' : 'Add an item to your cart before placing an order.',
  }
}
