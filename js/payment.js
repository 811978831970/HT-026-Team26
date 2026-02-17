let cart = JSON.parse(localStorage.getItem("cart")) || [];

function loadPaymentDetails() {
    let itemsList = document.getElementById("payment-items");
    let total = 0;
    itemsList.innerHTML = "";

    cart.forEach(item => {
        let subtotal = item.price * item.quantity;
        total += subtotal;

        let li = document.createElement("li");
        li.textContent = ${item.name} x ${item.quantity} = ₹${subtotal};
        itemsList.appendChild(li);
    });

    document.getElementById("payment-total").innerText = total;
}

function processPayment(event) {
    event.preventDefault();

    if(cart.length === 0){
        alert("Cart is empty!");
        return;
    }

    alert("Payment Successful! 🎉");

    localStorage.removeItem("cart");
    window.location.href = "index.html";
}

function processUPI() {
    if(cart.length === 0){
        alert("Cart is empty!");
        return;
    }

    alert("UPI Payment Successful! 🎉");

    localStorage.removeItem("cart");
    window.location.href = "index.html";
}

loadPaymentDetails();