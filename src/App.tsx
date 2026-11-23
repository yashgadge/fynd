import { useRef, useState } from 'react'
import { products } from './data/products'
import { ProductCard } from './components/ProductCard'
import { CartSummary } from './components/CartSummary'
import { CheckoutForm } from './components/CheckoutForm'
import { OrderConfirmation } from './components/OrderConfirmation'
import { Icon } from './components/Icon'
import { emptyCart, setQuantity, summarise } from './utils/cart'
import { validate } from './utils/validation'
import type { Order, ProductId } from './types/checkout'
import './App.css'

export default function App() {
  const [cart, setCart] = useState(emptyCart)
  const [name, setName] = useState('')
  const [attempted, setAttempted] = useState(false)
  const [order, setOrder] = useState<Order | null>(null)
  const submitted = useRef(false)
  const { lines, count, total } = summarise(cart)
  const errors = validate(name, count)

  function change(id: ProductId, delta: number | 'remove') {
    if (submitted.current) return
    setCart(previous => setQuantity(previous, id, delta === 'remove' ? 0 : previous[id] + delta))
  }
  function submit() {
    if (submitted.current) return
    setAttempted(true)
    if (errors.name || errors.cart) {
      if (errors.name) document.getElementById('customer')?.focus()
      return
    }
    submitted.current = true
    setOrder({ reference: crypto.randomUUID().toUpperCase(), customer: name.trim(), lines, total })
  }

  return <><header><div className="wrap navbar"><a className="wordmark" href="#top"><img alt="" src="/bag.svg" />Store</a>
    <div className="breadcrumb">Store <span>/</span> Checkout</div><a className="cart-link" href="#summary"><Icon name="bag" />{order ? 'Receipt' : 'Cart'} <b>{count}</b></a></div></header>
    <main id="top" className="wrap"><div className="intro"><div><h1>Store Checkout</h1><p>Select your items and review your order.</p></div><img className="sketch" src="/stationery.svg" alt="" /></div>
    <div className="layout"><section aria-labelledby="products" className="catalog"><div className="section-title"><h2 id="products">Desk essentials</h2><span>2 products</span></div>
    <div className="products">{products.map(product => <ProductCard key={product.id} product={product} quantity={cart[product.id]} onAdd={() => change(product.id, 1)} locked={Boolean(order)} />)}</div></section>
    <div id="summary">{order ? <OrderConfirmation order={order} /> : <section aria-label="Checkout summary" className="panel">
    <CartSummary lines={lines} count={count} total={total} change={change} error={attempted ? errors.cart : ''} />
    <CheckoutForm name={name} update={setName} submit={submit} error={attempted ? errors.name : ''} /></section>}</div></div>
    </main></>
}
