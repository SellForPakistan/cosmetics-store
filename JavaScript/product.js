const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

let selectedQty = 1;

document.addEventListener("DOMContentLoaded", loadProduct);

async function loadProduct(){

const products = await getProducts();

const product = products.find(p =>
p['Product ID'] === productId
);

const box = document.getElementById("productDetail");

box.innerHTML = `
<div class="product-box">

<img src="${product['Main Image']}" />

<h2>${product['Product Name']}</h2>

<p>${product['Details']}</p>

<h3>Rs ${product['Price']}</h3>

</div>
`;

// BUY BUTTON
document.getElementById("buyNowBtn")
.onclick = () => {
document.getElementById("orderForm")
.style.display = "block";
};

setupQty();

setupOrder(product);

}

// ---------------- QTY ----------------
function setupQty(){

document.getElementById("plus").onclick = () => {
selectedQty++;
document.getElementById("qty").innerText = selectedQty;
};

document.getElementById("minus").onclick = () => {
if(selectedQty > 1){
selectedQty--;
document.getElementById("qty").innerText = selectedQty;
}
};

}

// ---------------- ORDER ----------------
function setupOrder(product){

document.getElementById("submitOrder").onclick = async () => {

const order = {

productId: product['Product ID'],
productName: product['Product Name'],
categoryId: product['Category ID'],
price: product['Price'],
quantity: selectedQty,

name: document.getElementById("name").value,
phone: document.getElementById("phone").value,
phone2: document.getElementById("phone2").value,
city: document.getElementById("city").value,
address: document.getElementById("address").value

};

await fetch(CONFIG.API_URL, {
method: "POST",
body: JSON.stringify(order)
});

alert("Your order has been placed successfully! Delivery in 3–5 days.");
};

}