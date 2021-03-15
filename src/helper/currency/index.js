const currencyHelper = (currency) => {
  let temp_currency = currency / 100
  return temp_currency.toLocaleString("en-US")
}

export default currencyHelper
