import type { Product } from '../types/checkout'
import { currency } from '../utils/currency'
import { Icon } from './Icon'
export function ProductCard({ product, quantity, onAdd, locked }: {
  product: Product; quantity: number; onAdd: () => void; locked: boolean
}) {
  return <article className="product">
    <div className={'art ' + product.id}><img src={'/' + product.id + '.svg'} alt="" /></div>
    <div className="product-info"><h3>{product.name}</h3><p>{product.detail}</p>
    <div className="product-actions"><strong>{currency(product.pricePaise)}</strong>
    <button disabled={locked} onClick={onAdd} aria-label={'Add ' + product.name + ' to cart'}>
      <span key={quantity} className={quantity ? 'pop' : ''}><Icon name={quantity ? 'check' : 'plus'} /></span>Add
    </button></div></div>
  </article>
}
