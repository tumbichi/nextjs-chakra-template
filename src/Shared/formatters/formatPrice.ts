const formatPrice = (value: number) => {
  const formatter = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
  });
  return formatter.format(value);
};

export default formatPrice;
