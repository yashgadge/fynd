import { products } from '../data/products'
import type { Cart, ProductId } from '../types/checkout'
export const emptyCart: Cart = { notebook: 0, organiser: 0 }

export function summarise(cart: Cart) {
  const lines = products.filter(product => cart[product.id] > 0).map(product => ({
    product, quantity: cart[product.id], amount: product.pricePaise * cart[product.id],
  }))
  return {
    lines,
    count: lines.reduce((sum, line) => sum + line.quantity, 0),
    total: lines.reduce((sum, line) => sum + line.amount, 0),
  }
}

export function setQuantity(cart: Cart, id: ProductId, quantity: number): Cart {
  if (!Number.isSafeInteger(quantity) || quantity < 0) return cart
  const next = { ...cart, [id]: quantity }
  return Number.isSafeInteger(summarise(next).total) ? next : cart
}
