//購物車數量
const productRow = document.querySelector(".product-list");
const plusButton = productRow.querySelector(".plus");
plusButton.addEventListener("click", incrementQuantity);
const minusButton = productRow.querySelector(".minus");
minusButton.addEventListener("click", decrementQuantity);
const deleteButton = productRow.querySelector(".delete");
deleteButton.addEventListener("click", deleteProduct);

function incrementQuantity() {
    const quantityInput = productRow.querySelector(".input-num");
    let quantity = parseInt(quantityInput.value);
    if (quantity < 10) {
        quantity++;
        quantityInput.value = quantity.toString();
        updateProductCost(quantity);
        updateSubtotal();
        updateTotal();
    }
}

function decrementQuantity() {
    const quantityInput = productRow.querySelector(".input-num");
    let quantity = parseInt(quantityInput.value);
    if (quantity > 1) {
        quantity--;
        quantityInput.value = quantity.toString();
        updateProductCost(quantity);
        updateSubtotal();
        updateTotal();
    }
}

function deleteProduct() {
    const quantityInput = productRow.querySelector(".input-num");
    quantityInput.value = "0";
    productRow.remove();
    updateProductCost(0);
    updateSubtotal();
    updateTotal();
}

function updateProductCost(quantity) {
    const productPrice = productRow.querySelector(".product-price");
    const productCost = productRow.querySelector(".product-cost");
    const price = parseInt(productPrice.textContent.replace("NT$", "").replace(",", ""));
    const cost = price * quantity;
    productCost.textContent = "NT$" + cost.toLocaleString();
}

function updateSubtotal() {
    const productCosts = document.querySelectorAll(".product-cost");
    let subtotal = 0;
    productCosts.forEach(function (productCost) {
        const cost = parseInt(productCost.textContent.replace("NT$", "").replace(",", ""));
        subtotal += cost;
    });
    const subtotalElement = document.querySelector(".subtotal span");
    subtotalElement.textContent = subtotal.toLocaleString();
}

function updateTotal() {
    const subtotal = parseInt(document.querySelector(".subtotal span").textContent.replace(",", ""));
    const freight = parseInt(document.querySelector(".freight span").textContent.replace(",", ""));
    const total = subtotal + freight;
    const totalElement = document.querySelector(".total span");
    totalElement.textContent = total.toLocaleString();
}
