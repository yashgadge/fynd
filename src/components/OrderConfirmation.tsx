import { useEffect, useRef } from 'react'
import type { Order } from '../types/checkout'
import { currency } from '../utils/currency'
import { Icon } from './Icon'
export function OrderConfirmation({ order }: { order: Order }) {
  const heading = useRef<HTMLHeadingElement>(null)
  useEffect(() => { heading.current?.focus() }, [])
  return <section className="receipt panel" aria-labelledby="confirmed">
    <span className="seal"><Icon name="check" /></span><h2 tabIndex={-1} ref={heading} id="confirmed">Order confirmed</h2>
    <p>Prepared for <strong>{order.customer}</strong></p>
    <p className="reference">Order reference <code>{order.reference}</code></p>
    <ul>{order.lines.map(({ product, quantity, amount }) => <li className="between" key={product.id}><span>{product.name} × {quantity}</span><strong>{currency(amount)}</strong></li>)}</ul>
    <div className="total between"><strong>Order total</strong><strong>{currency(order.total)}</strong></div>
  </section>
}
