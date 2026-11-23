import type { Line, ProductId } from '../types/checkout'
import { currency } from '../utils/currency'
import { CartItem } from './CartItem'
import { Icon } from './Icon'
export function CartSummary({ lines, count, total, error, change }: {
  lines: Line[]; count: number; total: number; error: string
  change: (id: ProductId, delta: number | 'remove') => void
}) {
  return <><div className="between"><h2>Your cart</h2><span className="count">{count} {count === 1 ? 'item' : 'items'}</span></div>
    {lines.length ? <ul className="cart-list">{lines.map(line => <CartItem key={line.product.id} line={line} change={delta => change(line.product.id, delta)} />)}</ul>
    : <div className="empty"><span><Icon name="bag" /></span><strong>Your cart is empty</strong><p>Add a product to get started.</p></div>}
    {error && <p role="alert" className="error">{error}</p>}
    <div className="total between"><strong>Order total</strong><output aria-label="Order total"><span className="pop" key={total}>{currency(total)}</span></output></div>
  </>
}
