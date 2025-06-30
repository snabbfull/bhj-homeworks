const products = document.querySelectorAll('.product');
const cartProducts = document.querySelector('.cart__products');

products.forEach((product) => {
    const dec = product.querySelector('.product__quantity-control_dec');
    const inc = product.querySelector('.product__quantity-control_inc');
    const valueEl = product.querySelector('.product__quantity-value');
    const addBtn = product.querySelector('.product__add');

    dec.addEventListener('click', () => {
        let value = parseInt(valueEl.textContent);
        if (value > 1) valueEl.textContent = value - 1;
    });

    inc.addEventListener('click', () => {
        let value = parseInt(valueEl.textContent);
        valueEl.textContent = value + 1;
    });

    addBtn.addEventListener('click', () => {
        const id = product.dataset.id;
        const quantity = parseInt(valueEl.textContent);
        const imageSrc = product.querySelector('.product__image').src;

        let cartProduct = cartProducts.querySelector(`.cart__product[data-id='${id}']`);

        if (cartProduct) {
            const countEl = cartProduct.querySelector('.cart__product-count');
            countEl.textContent = parseInt(countEl.textContent) + quantity;
        } else {
            const cartProductEl = document.createElement('div');
            cartProductEl.classList.add('cart__product');
            cartProductEl.dataset.id = id;

            const img = document.createElement('img');
            img.classList.add('cart__product-image');
            img.src = imageSrc;

            const count = document.createElement('div');
            count.classList.add('cart__product-count');
            count.textContent = quantity;

            cartProductEl.appendChild(img);
            cartProductEl.appendChild(count);
            cartProducts.appendChild(cartProductEl);
        }
    });
});
