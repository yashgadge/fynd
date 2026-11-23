const paths = {
  bag: 'M4 8h16l1 13H3L4 8Zm4 0V6a4 4 0 0 1 8 0v2',
  plus: 'M5 12h14M12 5v14', minus: 'M5 12h14', arrow: 'M4 12h15m-6-6 6 6-6 6',
  check: 'm4 12 5 5L20 6', trash: 'M4 6h16M9 6V3h6v3M6 6l1 15h10l1-15M10 10v7m4-7v7',
}
export function Icon({ name }: { name: keyof typeof paths }) {
  return <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round"><path d={paths[name]} /></svg>
}
