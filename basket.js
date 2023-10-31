function upadateCaseNumber(product, price, isIncreasing) {
    const caseInput = document.getElementById(product + '-number');
    let caseNumber = caseInput.value;

    if (isIncreasing) {
        caseNumber = parseInt(caseNumber) + 1;
    } else if (caseNumber > 0) {
        caseNumber = parseInt(caseNumber) - 1;
    }

    caseInput.value = caseNumber;

    const caseTotal = document.getElementById(product + '-total');
    caseTotal.innerText = caseNumber * price;
    calculateTotal();
    updateTotalprice(); 
}

function getInputvalue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateTotal() {
    const juiceTotal = getInputvalue('juice') * 109.95;
    const caseTotal = getInputvalue('case') * 55.99;
    const subTotal = juiceTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;

    // update on the HTML
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}

document.getElementById('case-plus').addEventListener('click', function () {
    upadateCaseNumber('case', 55.99, true);
});

document.getElementById('case-minus').addEventListener('click', function () {
    upadateCaseNumber('case', 55.99, false);
});

document.getElementById('juice-plus').addEventListener('click', function () {
    upadateCaseNumber('juice', 109.95, true);
});

document.getElementById('juice-minus').addEventListener('click', function () {
    upadateCaseNumber('juice', 109.95, false);
});

function calculateTotalprice() {
    const juiceTotal = getInputvalue('juice') * 109.95;
    const caseTotal = getInputvalue('case') * 55.99;
    const subTotal = juiceTotal + caseTotal;

    return subTotal;
}

function updateTotalprice() {
    const totalprice = calculateTotalprice();
   
    document.getElementById('total-price').innerText = totalprice.toFixed(2);
}


updateTotalprice();
