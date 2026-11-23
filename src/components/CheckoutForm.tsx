import { Icon } from './Icon'
export function CheckoutForm({ name, error, update, submit }: {
  name: string; error: string; update: (value: string) => void; submit: () => void
}) {
  return <form noValidate onSubmit={event => { event.preventDefault(); submit() }}>
    <label htmlFor="customer">Customer Name <span>(required)</span></label>
    <input id="customer" required autoComplete="off" placeholder="Enter your name" value={name}
      aria-invalid={Boolean(error)} aria-describedby={error ? 'name-error' : undefined} onChange={event => update(event.target.value)} />
    {error && <p className="error" role="alert" id="name-error">{error}</p>}
    <button className="primary" type="submit">Place Order <Icon name="arrow" /></button>
    <p className="local-note">Orders are simulated in this browser.</p>
  </form>
}
