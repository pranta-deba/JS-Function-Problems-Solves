function discountPrice(quantity) {
  const price01To100 = 100;
  const price101To200 = 90;
  const price201To300Up = 70;

  let total;

  if (quantity <= 100) {
    total = quantity * price01To100;
    return total;
  } else if (quantity <= 200) {
    const quantity101ToUp = quantity - 100;
    const priceOne = 100 * price01To100;
    const priceTwo = quantity101ToUp * price101To200;
    total = priceOne + priceTwo;
    return total;
  } else {
    const quantity201ToUp = quantity - 200;
    const priceOne = 100 * price01To100;
    const priceTwo = 100 * price101To200;
    const priceThree = quantity201ToUp * price201To300Up;
    total = priceOne + priceTwo + priceThree;
    return total;
  }
}

const result = discountPrice(201);
console.log(result);
