const products = document.querySelectorAll(".product");
const cartProducts = document.querySelector(".cart__products");

products.forEach((product) => {
  const incBtn = product.querySelector(".product__quantity-control_inc");
  const decBtn = product.querySelector(".product__quantity-control_dec");
  const countValue = product.querySelector(".product__quantity-value");
  const addBtn = product.querySelector(".product__add");
  const productImage = product.querySelector(".product__image");

  incBtn.addEventListener("click", () => {
    countValue.textContent = Number(countValue.textContent) + 1;
  });

  decBtn.addEventListener("click", () => {
    if (Number(countValue.textContent) > 1) {
      countValue.textContent = Number(countValue.textContent) - 1;
    }
  });

  addBtn.addEventListener("click", () => {
    const existingCartProduct = cartProducts.querySelector(
      `.cart__product[data-id="${product.dataset.id}"]`
    );

    if (existingCartProduct) {
      const existingProductValue = existingCartProduct.querySelector(
        ".cart__product-count"
      );
      existingProductValue.textContent =
        Number(existingProductValue.textContent) +
        Number(countValue.textContent);
    } else {
      const cartProduct = document.createElement("div");
      cartProduct.className = "cart__product";
      cartProduct.dataset.id = product.dataset.id;

      const cartProductImg = document.createElement("img");
      cartProductImg.className = "cart__product-image";
      cartProductImg.src = productImage.src;

      const cartProductValue = document.createElement("div");
      cartProductValue.className = "cart__product-count";
      cartProductValue.textContent = countValue.textContent;

      cartProduct.append(cartProductImg, cartProductValue);
      cartProducts.append(cartProduct);
    }
  });
});
