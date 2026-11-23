import type { Line } from '../types/checkout'
import { currency } from '../utils/currency'
import { Icon } from './Icon'
export function CartItem({ line, change }: { line: Line; change: (delta: number | 'remove') => void }) {
  const { product, quantity, amount } = line
  return <li className="line" aria-label={product.name}>
    <div className="between"><strong>{product.name}</strong><strong aria-label="Line total">{currency(amount)}</strong></div>
    <div className="between"><div className="stepper">
      <button aria-label={'Decrease ' + product.name + ' quantity'} onClick={() => change(-1)}><Icon name="minus" /></button>
      <span aria-label="Quantity">{quantity}</span>
      <button aria-label={'Increase ' + product.name + ' quantity'} onClick={() => change(1)}><Icon name="plus" /></button>
    </div><button className="remove" aria-label={'Remove ' + product.name} onClick={() => change('remove')}><Icon name="trash" /></button></div>
  </li>
}
