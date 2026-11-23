import { useRef } from 'react'
import type { Product } from '../types/checkout'
import { currency } from '../utils/currency'
import { Icon } from './Icon'
export function ProductCard({ product, quantity, onChange, locked }: {
  product: Product; quantity: number; onChange: (delta: 1 | -1) => void; locked: boolean
}) {
  const addButton = useRef<HTMLButtonElement>(null)
  return <article className="product">
    <div className={'art ' + product.id}><img src={'/' + product.id + '.svg'} alt="" /></div>
    <div className="product-info"><h3>{product.name}</h3><p>{product.detail}</p>
    <div className="product-actions"><strong>{currency(product.pricePaise)}</strong>
    <div role="group" aria-label={`${product.name} quantity controls`} className={quantity ? 'product-stepper' : undefined}>
      {quantity > 0 && <>
        <button disabled={locked} aria-label={`Remove one ${product.name}`} onClick={() => {
          if (quantity === 1) addButton.current?.focus()
          onChange(-1)
        }}><Icon name="minus" /></button>
        <output aria-label={`${product.name} in cart`}>{quantity}</output>
      </>}
      <button ref={addButton} disabled={locked} onClick={() => onChange(1)}
        aria-label={quantity ? `Add one ${product.name}` : `Add ${product.name} to cart`}>
        <Icon name="plus" />{quantity === 0 && 'Add'}
      </button>
    </div></div></div>
  </article>
}
