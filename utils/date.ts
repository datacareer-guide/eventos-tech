
export function formatDateRange(start: string, end: string) {
  const startDate = new Date(start)
  const endDate = new Date(end)
  return `${startDate.toLocaleDateString("PT-BR")} - ${endDate.toLocaleDateString("PT-BR")}`
}