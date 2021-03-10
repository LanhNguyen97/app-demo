export const numberWithCommasAndCurrency = (x, currency = 'đ') => {
  return `${x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}${currency}`;
}

export const getPromotionalPrice = (originalPrice, discount) => {
  return numberWithCommasAndCurrency((parseInt(originalPrice) * parseInt(discount)) / 100);
}