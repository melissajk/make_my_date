
const figureDate = (days) => {
  if (!days) {
    return 'N/A'
  }
  const date = new Date()
  date.setDate(date.getDate() + days)
  const futureMonth = date.getMonth()
  const futureDate = date.getDate()
  return `${futureMonth + 1}/${futureDate}`
}

export function compileDates(dateData) {
  dateData.forEach((product) => {
    product['futureDateRef'] = figureDate(product.daysRef)
    product['futureDateAmb'] = figureDate(product.daysAmb)
  })
  return dateData
}
