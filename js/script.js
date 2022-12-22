function updateProductNumber(Product, isIncreasing, price) {
    const ProductInput = document.getElementById(Product + '-number');
    let ProductNumber = ProductInput.value;
    if (isIncreasing == true) {
        ProductNumber = parseInt(ProductNumber) + 1;
    }
    else if (ProductNumber > 0) {

        ProductNumber = parseInt(ProductNumber) - 1;
    }
    ProductInput.value = ProductNumber;

    const ProductTotal = document.getElementById(Product + '-total');
    ProductTotal.innerText = ProductNumber * price;

    calculateTotal();
}
function getInputValue(Product) {
    const productInput = document.getElementById(Product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
function calculateTotal() {

    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;

    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}

// case
document.getElementById('case-plus').addEventListener('click', function () {
    // const caseInput = document.getElementById('case-number');
    // const caseNumber = caseInput.value;
    // caseInput.value = parseInt(caseNumber) + 1;
    updateProductNumber('case', true, 59);
});
document.getElementById('case-minus').addEventListener('click', function () {
    // const caseInput = document.getElementById('case-number');
    // const caseNumber = caseInput.value;
    // caseInput.value = parseInt(caseNumber) - 1;
    updateProductNumber('case', false, 59);
    // if (caseNumber > 0) {
    //     caseInput.value = parseInt(caseNumber) - 1;
    // }
});



// phone
document.getElementById('phone-plus').addEventListener('click', function () {
    // const phoneInput = document.getElementById('phone-number');
    // const phoneNumber = phoneInput.value;
    // phoneInput.value = parseInt(phoneNumber) + 1;
    updateProductNumber('phone', true, 1219);
})
document.getElementById('phone-minus').addEventListener('click', function () {
    // const phoneInput = document.getElementById('phone-number');
    // const phoneNumber = phoneInput.value;
    // if (phoneNumber > 0) {
    //     phoneInput.value = parseInt(phoneNumber) - 1;
    // }
    updateProductNumber('phone', false, 1219);

})

// sub-total
// document.getElementById('sub-total')addEventListener('click', function () {


// })