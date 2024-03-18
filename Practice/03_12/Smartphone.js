class Smartphone {
  constructor(model, price, displaySize) {
    (this.model = model),
    (this.price = price),
    (this.displaySize = displaySize);
  }
  updatePrice(newPrice) {
    this.price = newPrice;
  }
}

export default Smartphone;
