export type ProductId = 'notebook' | 'organiser'
export interface Product { id: ProductId; name: string; detail: string; pricePaise: number }
export type Cart = Readonly<Record<ProductId, number>>
export interface Line { product: Product; quantity: number; amount: number }
export interface Order { reference: string; customer: string; lines: Line[]; total: number }
