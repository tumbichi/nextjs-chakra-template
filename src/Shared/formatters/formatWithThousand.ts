const formatWithThousand = (number: number) => {
  // Convertir el DNI a cadena de texto y quitar espacios en blanco al principio y al final
  const numberString = String(number).trim();

  // Agregar puntos al DNI cada tres dígitos, empezando desde el final
  let numberFormatted = "";
  // eslint-disable-next-line no-plusplus
  for (let i = numberString.length - 1, j = 0; i >= 0; i--, j++) {
    numberFormatted = numberString.charAt(i) + numberFormatted;
    if (j === 2 && i !== 0) {
      numberFormatted = `.${numberFormatted}`;
      j = -1;
    }
  }

  return numberFormatted;
};

export default formatWithThousand;
