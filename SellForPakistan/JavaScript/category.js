const urlParams = new URLSearchParams(window.location.search);
const categoryId = urlParams.get("id");

document.addEventListener("DOMContentLoaded", loadCategoryProducts);

async function loadCategoryProducts(){

const products = await getProducts();

const filtered = products.filter(p =>
p['Category ID'] === categoryId
);

const container = document.getElementById("categoryProducts");

container.innerHTML = "";

filtered.forEach(p => {

container.innerHTML += `
<div class="card">
<img src="${p['Main Image']}" />
<h3>${p['Product Name']}</h3>
<p>Rs ${p['Price']}</p>
<button onclick="openProduct('${p['Product ID']}')">
View
</button>
</div>
`;

});

}

function openProduct(id){
window.location.href = `product.html?id=${id}`;
}