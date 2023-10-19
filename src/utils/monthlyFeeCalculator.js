export function monthlyFeeCalculator (loan) {
  const monthlyInterest = (loan.tae / 100) / 12
  const monthsAmortizationPeriod = -(loan.amortization_time_years * 12)
  const divAuxPart = 1 + monthlyInterest
  const divPow = Math.pow(divAuxPart, monthsAmortizationPeriod)
  const divFinalPart = 1 - divPow
  return (loan.total_capital * monthlyInterest) / divFinalPart
}
