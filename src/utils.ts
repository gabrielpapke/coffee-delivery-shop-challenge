export function formatPrice(value: number): string {
  return value.toLocaleString('pt-br', {
    minimumFractionDigits: 2,
  })
}
