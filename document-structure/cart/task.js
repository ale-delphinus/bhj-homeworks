const minus = document.getElementsByClassName('product__quantity-control_dec');
const plus = document.getElementsByClassName('product__quantity-control_inc');
const basketAdd = document.getElementsByClassName('product__add');
const basket = document.getElementsByClassName('cart__products').item(0);

function add(event) {
    let inc = event.target;
    inc.previousElementSibling.textContent++;
}

function deduct(event) {
    let dec = event.target;
    if (dec.nextElementSibling.textContent <= 1) {
        dec.nextElementSibling.textContent = 1;
    } else {
        dec.nextElementSibling.textContent--;
    }
}

function addToBasket(event) {
    let productToBasket = event.target.closest('.product');
    let id = productToBasket.dataset.id;
    let productImage = productToBasket.querySelector('.product__image').src;
    let number = productToBasket.querySelector('.product__quantity-value').textContent;

    let products = [];
    products.push({
        id: id,
        image: productImage,
        count: number
    })

   
    const productInCard = products.find((product) => product.id === id);
        if(productInCard) {
        let productAmount = productInCard.querySelector('.cart__product-count').textContent + number;
        productInCard.querySelector('.cart__product-count').textContent = productTotal;
        } else {
        productInCard = document.createElement('div');
        productInCard.classList.add('cart__product');
        productInCard.dataset.id = id;
        productInCard.innerHTML = `
            <img class='cart__product-image' src='${productImage}'>
            <div class='cart__product-count'>${number}</div>
        `;
        document.querySelector('.cart__products').appendChild(productInCard);
    }   
}

for (let i = 0; i < plus.length; i++) {
    plus.item(i).addEventListener('click', add);
    minus.item(i).addEventListener('click', deduct);
    basketAdd.item(i).addEventListener('click', addToBasket);
}