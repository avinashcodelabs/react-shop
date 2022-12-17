const formatter = new Intl.NumberFormat(undefined, {
  currency: "INR", // USD
  style: "currency",
});

function formatCurrency(number) {
  return formatter.format(number);
}

export { formatCurrency };
