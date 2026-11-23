const formatter = new Intl.NumberFormat('en-IN', {
  style: 'currency', currency: 'INR', minimumFractionDigits: 0, maximumFractionDigits: 2,
})
export const currency = (paise: number) => formatter.format(paise / 100)
