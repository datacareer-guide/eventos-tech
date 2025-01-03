
export function formatDateRange(start: string, end: string) {
  if (start=='TBD' || end=='TBD' || !start) return 'TBD';
  if (start == end) return new Date(start).toLocaleDateString("PT-BR")
  const startDate = new Date(start)
  const endDate = new Date(end)
  return `${startDate.toLocaleDateString("PT-BR")} - ${endDate.toLocaleDateString("PT-BR")}`
}